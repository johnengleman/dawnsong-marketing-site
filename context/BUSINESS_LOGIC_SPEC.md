# Business Logic Spec (Sona)

This document is the **human-readable specification** for Sona business logic.

- **Outcome:** Make the app’s rules easy to understand, reason about, and modify safely.
- **Boundary:** This is **not** the runtime “source of truth.” The **code is authoritative**. If this doc and the code disagree, the code wins and the doc should be updated.

## Where the “truth” lives in code

- **Data model types:** `types/models.ts`
- **Period units + boundaries (day/week/month):** `utils/periodUtils.ts`
- **DateKey + time invalidation:** `utils/dateKey.ts`, `store/timeStore.ts`, `hooks/useTimeKeeper.ts`
- **Completion event-log semantics:** `store/completionsStore.ts`
- **Period markers (missed/skipped/protected):** `store/periodMarkersStore.ts`, `store/habitsStore.ts`
- **Expected scheduled units in a range:** `utils/habitSchedule.ts`
- **Completion percentage / progress model (shared):** `utils/completionStats.ts`
- **Consistency milestones:** `utils/consistencyMilestones.ts`, `utils/consistencyMilestoneScheduler.ts`
- **Notifications scheduling/handlers:** `utils/notifications.ts`, `utils/notificationScheduler.ts`

## Reminder plan model

Habit reminders support four modes:

- `off`: no habit reminders are scheduled.
- `once`: schedule one reminder for the current period while incomplete, then shift to the next period once satisfied.
- `onPace`: compute the next useful reminder from the habit frequency, required completions, completed units in the current period, and the preferred reminder window.
- `specific`: use exact reminder times and selected weekdays/month days.

If `reminderPlanMode` is unset, existing habits use legacy behavior: any stored exact reminder times are treated as `specific`; no stored times means reminders are off.

## Glossary

### DateKey

A calendar day key in `YYYY-MM-DD` format.

- Used for “day-level” grouping and comparisons.
- DateKeys are **local-calendar** keys (e.g. “today” is computed via `todayKeyLocal()`), but many computations parse them using **UTC parsing** to keep ordering/bucketing deterministic.

### Completion event (row)

A single persisted record representing one user action or day marker.

- Each event has a `timestamp` (ISO string) for ordering and analytics.

### Completion units

A numeric quantity representing actual progress toward a requirement.

- In the event-log model, **completed units come from `status === "completed"` rows only**.
- For most user actions, each completed row contributes `completionCount = 1` unit.

### Habit

- `habit.completionsRequired`: required units per period (day/week/month depending on frequency).
- `habit.frequencyId`: determines period unit (daily/weekly/monthly).
- `habit_requirement_history`: snapshots a habit's `frequencyId`, period unit, and `completionsRequired` from a whole period boundary onward.
- `habit.createdDateKey`: habit existence start for any “since creation” computations.
- `habit.createdTzOffsetMinutes`: timezone offset (in minutes) at creation time, captured for analytics/debugging.
- `habit.enableRestDays`: whether the habit can use rest periods.
- `habit.goalIds`: personal goal assignments.

### Area / Goal

An area is the first-class user-facing container for related habits. The persisted
domain model still uses `goal`/`goalIds` names.

- Personal areas are backed by goal rows and assigned through `habit.goalIds`.
- A habit can belong to at most one area. It can technically be uncategorized, but the
  preferred product path is that each habit lives inside an area.
- An area can contain daily, weekly, and monthly habits together. The area groups by
  purpose; frequency remains a per-habit scheduling rule.
- Area consistency must aggregate each habit's native cadence-aware consistency. Do not
  average raw completion counts across daily, weekly, and monthly habits, because one monthly
  completion and thirty daily completions do not carry the same denominator meaning.

### Completion

`Completion.status` is:
**Invariant (units):**

- Only `status === "completed"` contributes units.
- `completionCount` should be treated as **units**, not an ordinal counter.
- Completions are an event log of completed units; non-completion states are stored separately as period markers.
  Period markers represent the per-period “truth” once a period is closed (day/week/month based on frequency).

Marker status:

- `"missed"`: period ended without meeting requirement.
- `"skipped"`: user-intended skip.
- `"protectedByRest"`: a rest period was spent to protect the period.

## Rest periods (“Rest this habit” across day / week / month habits)

The UI uses a single “rest” concept across frequencies:

- Daily habits → “Rest this habit?” / “Resting today”
- Weekly habits → “Rest this habit?” / “Resting this week”
- Monthly habits → “Rest this habit?” / “Resting this month”

### Earning rest periods

Current earning rule:

- Earn rate: **1 rest period per 5 completed events**.
- Spent rest periods are represented by `HabitPeriodMarker.status === "protectedByRest"` markers.
- Rest periods are capped per-habit at: `3`.

**Note:** Earning/spending currently uses “count of completed events” (rows) rather than “sum of completion units.” This is intentional given the event-log design, but if we ever introduce “multi-unit completion rows,” this rule must be revisited.

### Spending (protection) semantics

A protected period:

- **Does not add numerator credit** (does not “count as completed units”).

In other words, protection is **denominator-neutral**:

- It does not increase completed units.

### When protection is applied

Protection is applied during “closed period” reconciliation:

- The app considers periods **closed** once the current period has started.
  - Daily habits: any day strictly before today.
  - Weekly habits: any ISO week strictly before the current ISO week.
  - Monthly habits: any month strictly before the current month.
- During reconciliation, for each closed period that is not completed and does not already have a `skipped`/`protectedByRest` marker:
  - If `habit.enableRestDays` is true and there is at least 1 rest period available, the period is marked `protectedByRest`.
- Reconciliation runs on app start and again when the “time token” changes (midnight or timezone offset change), and also when the app returns to foreground.

## Completion percentage model (shared)

All completion percentage / progress computations should flow through:

- `utils/completionStats.ts`

The model maps a habit to a period unit:

- Weekly (`frequencyId === "default-weekly"`) → unit = `week`

### Protected periods adjustment

- Let `protectedPeriodsCount` be the number of **distinct periods** (day/week/month keys) that contain a `protectedByRest` marker.
- Adjusted scheduled units:
- Adjusted scheduled units:
  - `adjustedScheduledUnits = max(0, scheduledUnits - protectedPeriodsCount * habit.completionsRequired)`
    **Note:** Scheduled units for most computations are derived from `getExpectedUnits(...)` (range start/end plus period unit), not hand-counted in UI.

**Note (skips):** `skipped` markers are treated as “successful” for streak-related UI, but they do **not** currently adjust completion percentage denominators in `utils/completionStats.ts` (only `protectedByRest` does).

### Completed units

- `actualUnits = sum(completion.completionCount for completion.status === "completed")`

If `adjustedScheduledUnits > 0`:

- `percentage = min(100, (actualUnits / adjustedScheduledUnits) * 100)`

If there are no scheduled units in the window:

- Some windows may return 100% if there are completions and the window definition allows it (see below).

### Window definitions

The app uses these shared window types:

- `sinceCreationCappedScheduledUnits`

- `rollingDays`
  - Computes scheduled units over a rolling day window of size `maxDays`.
- `habitCardVisualWindow`
  - Has separate caps for daily/weekly/monthly.
  - Supports both closed-period and live-current-period scoring. Habit-card
    badges include the current day/week/month so the score reacts immediately
    as the user completes units. Stats and aggregate surfaces can keep closed
    periods only when they need a settled historical view.
  - Rest-protected and skipped periods are excluded from the average.

### Habit rule changes

When a user changes a habit's frequency or required completion count:

- The current habit row stores the latest rule.
- A requirement-history row snapshots the new rule from the current period start
  for that rule's cadence.
- Past periods are scored by the requirement-history row that was active for that
  period, not by the current habit row.
- Completion-count changes within the same cadence preserve rolling continuity.
- Cadence changes start a new scoring era so daily, weekly, and monthly promises
  are not mixed inside one rolling denominator.

### Progress ratio (0..1)

For per-period UI progress rings (e.g., day selector / heatmap cells):

- Base ratio is `min(completedUnits / completionsRequired, 1)`.
- Some UI surfaces treat marker states as overrides:
  - `protectedByRest` is treated as “safe/successful”.
  - `skipped` is treated as “successful” for streak purposes.
  - Neither `protectedByRest` nor `skipped` adds completed units.

## UI rules and mapping

### Habit card button progress (the “+ / check” ring)

- Shows progress based on **completed units for that DateKey**.
- Ignores period markers (`protectedByRest`, `skipped`, `missed`) when computing completed units.

### Habit card percentage badges

- Must use the shared completion percentage model.
- Must not re-implement denominator/protection logic locally.
- Must include the current period once it has real state: completed units or a
  period marker. An empty active period must not pull the score down at the
  start of a new day/week/month; the badge starts reacting after the user makes
  progress or explicitly protects/skips the period.

### Area-scoped Home and consistency

- Home area selection filters habits by personal area first.
- Within a selected area, habits are grouped into Daily, Weekly, and Monthly sections for
  scanability.
- Area consistency is scoped to the selected area. It should average eligible habit
  consistency percentages after each habit has been scored using its own cadence/window logic.
- Empty or unassigned areas should not appear in the area carousel unless a product
  decision explicitly changes discoverability; area management can show all areas.

### Consistency milestones

Consistency milestones are active-only Progress achievements for both scopes:

- `area`: a personal area backed by a goal row.
- `habit`: a single habit scored through the same daily-sampled trend engine.

Milestones are based on closed-period Progress consistency, not the live current-period
habit-card badge. The engine only counts scored trend points where `requiredUnits > 0`; empty
or newly created scopes do not earn milestones from placeholder zero-denominator points.

Catalog:

- `above_80_now`: latest scored closed day is at least 80%.
- `at_90_bar_now`: latest scored closed day is at least 90%.
- `week_above_50`: latest 7 scored closed days are all at least 50%.
- `week_above_80`: latest 7 scored closed days are all at least 80%.
- `month_above_80`: latest 30 scored closed days are all at least 80%.
- `week_at_90_bar`: latest 7 scored closed days are all at least 90%.
- `month_at_90_bar`: latest 30 scored closed days are all at least 90%.

Active milestones fall off as soon as the latest qualifying window no longer satisfies the rule.
Previous activations are kept only as device-local dedupe state in
`consistency_milestone_states`; they are not shown as permanent badges.

Milestone notifications are opt-in. A local notification may be scheduled only on an
`inactive -> active` transition. Each evaluator pass chooses at most one highest-priority
candidate to notify, then marks all same-pass activation episodes handled so lower-priority
milestones do not drip-notify on later passes. Notification identifiers are deterministic:
`consistency-milestone:{scopeType}:{scopeId}:{milestoneId}:{activeSinceDateKey}`.

### Stats charts and heatmaps

- Percent summaries should come from `calculateCompletionPercentageForDateRange`.
- Individual day/period cells must compute progress from completed units and show protection as a distinct state.

### Streak semantics (UI)

For streak-related UI (e.g. streak history and best streaks):

- A period counts as “successful” if either:
  - completed units for that period meet/exceed `completionsRequired`, OR
  - the period has a `skipped` marker, OR
  - the period has a `protectedByRest` marker.

## Export rules

### Export

- Export writes a local JSON backup using the shared domain snapshot format (`formatVersion = 5`).
- Export includes categories/goals, habits, completions, habit period markers, and habit requirement history.
- Export does not include account state, subscription state, onboarding metadata, theme choices, milestone notification state, or other device settings.

### Import

- Import accepts the same JSON domain snapshot format used by local export and the cloud bridge restore path.
- Import replaces the current local domain tables on the device before inserting the imported snapshot.
- Import clears local consistency milestone state so stale active/dedupe episodes do not follow replaced habit data.
- Import also clears sync bookkeeping tables so stale outbox or sync-state rows are not carried across restores.
- Import refreshes local stores immediately after restore so the app reflects the imported data without a relaunch.
- Import is disabled while Demo Mode is active.

## Guardrails (how to avoid future drift)

1. **Never use `completions.length` as progress**. Progress should be based on `sum(completionCount)` for completed rows. (Exception: rest-period earning currently uses completed-row count because `completionCount` is always `1` today.)
2. **Never treat `protectedByRest` as full credit**; it is a marker and affects percentage via denominator adjustment only.
3. **UI must delegate**: percentage/progress math belongs in `utils/completionStats.ts`.
4. **Add/adjust automated checks** whenever changing these rules:
   - `utils/__tests__/completionStats.test.ts`
   - targeted store or repository checks when persistence or reconciliation behavior changes
   - focused UI or E2E checks only when a user-visible percent/progress regression cannot be caught lower in the stack

## Canonical examples

### Example A: Daily habit, `completionsRequired = 3`, today has 2 completed events

- Completed units today: 2
- Progress today: 2/3
- The habit card progress ring/pebbles show 2/3 for today.
- Habit card rolling consistency does **not** count today yet, because the day is
  still open.

### Example B: Same as A, plus a `protectedByRest` marker today

- Completed units today: still 2
- The day is considered “protected” for certain UI surfaces (streak safety), but **numerator stays 2**.
- Once the day closes, percentage computation excludes the protected period from
  the denominator; it does not add numerator credit.
