# Features

Updated: 2026-06-07

Designs and specs for distinct app features of the Sona routine builder and habit
consistency app.

> **Removed (May 2026):** This document previously also covered two Supabase-backed
> features — Community Goal Rankings and Goal Challenges ("Goal Battles"). Both
> were dormant behind feature flags and the entire subsystem (code, flags, and dependencies)
> was removed when the app committed to being fully local-only. The specs below cover only
> shipped, active features. If a community/leaderboard feature is ever revived, it should be
> redesigned from scratch rather than restored from git history.

---

# Per-Habit Reminders

Per-habit reminder setup so users can quickly create reminder plans that match required
completions (e.g. 4 completions/day → 4 reminder slots) with minimal manual time-picker work.

> This spec covers **per-habit reminders** configured on each habit. Global smart/catch-up
> reminders have been **retired** and removed from the product (Settings no longer exposes a
> catch-up toggle; notification scheduling no longer creates end-of-period smart reminders).
> Where this spec references "smart reminders," that is historical context only — no
> smart-reminder configuration exists in the app.

Custom reminder schedules are positioned as the paid tier — an advanced control
surface.

## Product Outcomes & Boundaries

Outcomes: make reminder setup feel obvious and fast for multi-completion habits; default to
guided generation over repetitive manual entry; preserve full manual control; reduce
notification fatigue by clarifying purpose and guardrails; keep behavior predictable across
iOS + Android.

Out of scope (MVP): AI-personalized reminder times; cross-habit optimization of all reminders;
complex recurrence rules beyond the current per-frequency model.

## UX Principles

1. **Completion-first**: start from required completions and build reminders from that number.
2. **Generate then adjust**: high-quality defaults, then let users tweak.
3. **Single-screen comprehension**: the user understands the final plan at a glance.
4. **Low-friction edits**: prefer chip/list edits over repeated modal hops.
5. **Safe defaults**: guard against dense, duplicate, or impractical schedules.

## Information Architecture

Inside Habit Form → Reminders section:

1. **Purpose header** — title `Reminders`, subtitle `Plan reminders for this habit's required completions.`
2. **Plan card (primary)** — reads `completionsRequired`; shows a dynamic line `Target: 4 completions per day` (or week/month); primary action `Create 4 reminder slots` (or `Reset to 4 slots` if already configured).
3. **Generation options (secondary)** — segmented options `Evenly spaced`, `Every X hours`, `Morning / Afternoon / Evening`; context controls for start time and interval.
4. **Reminder slot list (editable)** — rows `Reminder 1 of 4`, etc.; each shows its time; tap a row to edit; delete is allowed (with a subtle warning if the count drops below target).
5. **Frequency-specific day selection** — Weekly: a weekday selector; Monthly: a month-day selector; Daily: hidden.
6. **Live summary** — e.g. daily `4 reminders between 9:00 AM and 7:00 PM.`; weekly `Mon, Wed, Fri at 9:00 AM.`; monthly `Days 1, 15, 28 at 8:30 PM.`

## Core Interaction Flows

**Flow A — Daily multi-completion (primary):** trigger is Daily frequency with
`completionsRequired >= 2`. The user opens Reminders, sees `Target: N completions per day` and
`Create N reminder slots`, picks a generation mode (default `Evenly spaced`) plus optional
parameters, taps `Generate plan`, the app fills N slots, the user optionally edits slot times,
then saves. Success: N reminders configured in ≤3 primary actions.

**Flow B — Weekly habit:** the user opens Reminders, selects up to N weekdays (N =
`completionsRequired` cap), sets a single reminder time, sees a summary (`Mon, Wed · 9:00
AM`), and saves. Success: the user understands that weekly requires both **days** and **time**
without hunting for hidden controls.

**Flow C — Monthly habit:** the user opens Reminders, selects up to N month days, sets one
reminder time, sees a summary (`1, 15, 28 · 8:00 PM`), and saves.

## Microcopy (MVP)

- Section header `Reminders`; description `Plan reminders for each required completion.`
- Plan card: `Target: {{count}} completion{{plural}} per {{period}}`; empty-state CTA `Create {{count}} reminder slots`; configured-state CTA `Reset to {{count}} slots`.
- Generation: mode labels `Evenly spaced` / `Every X hours` / `Morning / Afternoon / Evening`; action `Generate plan`; replace warning `Generating will replace current reminder times.`
- Slot list: row title `Reminder {{index}} of {{count}}`; manual add `Add reminder`; empty state `No reminders yet.`
- Validation messages: `You have {{configured}} reminders for a {{target}}-completion habit.` · `Some reminders are less than 60 minutes apart.` · `Enable notifications in Settings to receive reminders.`

## Validation & Behavior Rules

Validation: slot count must be `<=` completion cap and `>= 0`; times are unique by local
`HH:mm`; sort times ascending; soft warning if reminders are fewer than required completions;
soft warning if adjacent reminders are under 60 minutes apart; preserve the current permission
request behavior.

Behavior: generating from the generator **replaces** existing reminder times (with warning
copy); manual edits after generation are always allowed; decreasing required completions trims
slots to the new max; increasing required completions does not auto-add silently — show a
prominent `Create N slots` / `Fill missing slots` CTA; weekly/monthly use one reminder time
plus selected day/date lists in MVP.

## Accessibility

All row actions and toggles need clear accessibility labels; slot rows expose ordinal context
(`Reminder 2 of 4`); minimum touch target 44x44; summary and warning text must pass WCAG AA
contrast via theme tokens; Dynamic Type must not truncate critical controls.

## Analytics Events

`goal_reminder_plan_generated` (habitId, frequencyId, completionTarget, mode, slotCount);
`goal_reminder_slot_edited` (habitId, slotIndex, oldTime, newTime);
`goal_reminder_under_target_warning_shown` (habitId, completionTarget, configuredSlots);
`goal_reminder_permission_denied` (habitId, action: `add`/`generate`/`edit`).

## Acceptance Criteria (MVP)

1. A daily habit with N required completions can generate N reminder slots in one primary action.
2. Generated reminders are editable and remain unique/sorted.
3. The user can identify a count mismatch immediately when configured reminders < required completions.
4. Weekly/monthly reminders clearly present day/date selection + single time without hidden steps.
5. Existing scheduling contracts remain unchanged.

## Implementation Notes

Existing assets to leverage: `components/HabitForm/HabitForm.tsx` (existing reminder list,
add/edit flow, summary, quick generation controls) and `utils/reminderSlots.ts`
(`generateDailyReminderTimes`, normalization, dedupe).

UI changes (MVP): use `Reminders` where user-facing; promote
the generator card to a first-class Plan Card with the `Create N reminder slots` CTA; keep the
current quick-generation internals but update labels/framing; add a visible count-state
indicator (`Configured X of N`); add the live summary sentence and under-target warning.

Logic changes (MVP): reuse current slot-cap and normalization helpers; add an adjacent-interval
warning helper (`< 60 min`) in form-derived state; preserve the current persistence schema
(`reminderTimes`, `reminderWeekdays`, `reminderMonthDays`) and scheduler interfaces.

Risk-based checks: manual simulator verification for copy/layout changes; focused UI checks
only if an interaction changes persisted reminder data (the `Create N reminder slots` CTA
behavior, count-mismatch warning visibility); utility checks if the interval-warning helper is
extracted.

Rollout: ship as an iterative UX refinement under the existing reminders feature-flag
boundary; keep the old data model and scheduler behavior for zero migration risk; monitor
plan-generation usage, edit-after-generate rate, and under-target warning frequency.

Open questions: should the `Morning / Afternoon / Evening` preset be limited to count `<= 3`
or adapt to larger counts? should weekly/monthly support multiple times later, or remain
single-time by design? should the under-target warning block save or stay informational (MVP
recommendation: informational only)?

---

# Local Consistency Milestones

Local-only milestone tracking for area and habit consistency, shown on Progress and optionally
announced through local notifications.

## Product Outcomes & Boundaries

Outcomes: make sustained consistency visible without creating streak pressure; celebrate current
stable periods; avoid notification fatigue through strict transition/dedupe rules.

Out of scope: cloud history, cross-device milestone sync, permanent badge collections, public
leaderboards, or milestone notifications without explicit opt-in.

## Milestone Catalog

Milestones apply to both `area` and `habit` scopes:

- `above_80_now`: current closed-period Progress score is at least 80%.
- `at_90_bar_now`: current closed-period Progress score is at least 90%.
- `week_above_50`: latest 7 scored closed days all stayed at or above 50%.
- `week_above_80`: latest 7 scored closed days all stayed at or above 80%.
- `month_above_80`: latest 30 scored closed days all stayed at or above 80%.
- `week_at_90_bar`: latest 7 scored closed days all stayed at or above 90%.
- `month_at_90_bar`: latest 30 scored closed days all stayed at or above 90%.

Only scored points with `requiredUnits > 0` qualify. Active milestones fall off when the latest
scored window no longer qualifies.

## UX Rules

Progress shows a Milestones card below the chart and before the habit breakdown. Active area
milestones appear first, followed by active habit milestones. Copy should stay quiet and factual,
for example `Health held above 80% for a week.`

If there are no active milestones, the card may show the closest next scored-window row, such as
`4 of 7 days above 80%`. If there is no useful scored progress, keep the card compact and avoid
motivational pressure.

## Notification Rules

Milestone notifications are controlled by a Settings opt-in. Enabling the setting requests local
notification permission; denial leaves the setting off and logs
`milestone_notification_permission_denied`.

The evaluator sends notifications only on `inactive -> active` transitions. Each evaluator pass
can schedule at most one notification, choosing the highest-priority candidate. All other
simultaneously activated candidates are marked handled so they do not notify later as a drip
sequence.

Notification state is stored locally in `consistency_milestone_states` and is not exported.
Local reset and backup import clear milestone state.

## Implementation Notes

Core files:

- `utils/consistencyMilestones.ts`: pure scoring/transition engine.
- `utils/consistencyMilestoneScheduler.ts`: local evaluator and notification arbitration.
- `repositories/interfaces/IConsistencyMilestoneRepository.ts`: repository boundary.
- `components/Progress/ProgressMilestonesCard.tsx`: Progress UI.

The scheduler uses the same closed-period Progress trend model as the Progress screen. Area
milestones evaluate the selected area's mixed-cadence consistency trend. Habit milestones evaluate
a single-habit daily-sampled trend with the same requirement-history, skipped, and rest-protected
semantics.
