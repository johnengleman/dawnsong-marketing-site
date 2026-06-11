# Sona ChatGPT App Context

Updated: 2026-06-02

Use this document as a standalone context pack for ChatGPT or another AI assistant.
Assume the assistant has no repository access unless Nicholas explicitly provides files or
screenshots. This pack is especially for product, design, copy, onboarding, paywall, App
Store, and marketing suggestions.

If this document conflicts with the live repo, the repo wins. In the repo, the slower-moving
sources of truth are:

- `docs/PHILOSOPHY.md` for what Sona believes.
- `docs/BRAND.md` for identity, voice, and positioning.
- `docs/DESIGN.md` for visual register and component direction.
- `docs/ARCHITECTURE.md` for product/technical shape.
- `docs/BUSINESS_LOGIC_SPEC.md` for habit, goal, completion, and rest rules.
- `constants/theme.ts` for current theme token values.

## Most Important Context

The public product name is **Sona**.

Sona is a local-first goal builder with habit tracking underneath. It helps people
build an extraordinary life through long runs of returning, not perfect streaks. The product
exists to kill one specific mechanic: the visible habit counter that resets to zero after a
missed day and makes the user feel like they failed.

Sona is not anti-momentum. It is anti-punishing-reset. Momentum should still be visible
through consistency scores, pebble/history grids, goal progress, stats, reminders, and
earned recognition.

Current high-confidence truths:

- Brand name: **Sona**.
- Runtime source of truth: on-device SQLite through Drizzle and `expo-sqlite`.
- Product mode: fully local-only.
- Organization model: goals first, habits inside goals, frequency as a property of the
  habit.
- Visual direction: painterly, atmospheric, warm, adult, emotionally safe.
- Design enemy: harsh productivity dashboards, shame UI, and streak-reset anxiety.

## Product In One Paragraph

Sona is a calm goal builder for people who keep restarting the same habits. Users
create goals, add habits inside those goals, choose daily, weekly, or monthly rhythms,
check in over time, and review progress through forgiving consistency scores, history
pebbles, stats, rest protection, and per-habit reminders. The app should feel warm,
beautiful, adult, and safe to reopen after a bad week, not like a cold tracker, a dense
analytics dashboard, or a gamified streak app.

## The Core Belief

Small days, repeated, become a different life. The hard part is not starting; it is returning
after a miss, sickness, travel, low energy, or a chaotic week. A missed day is information,
not failure. Punishment is not motivation. Rest is part of the practice. Not every habit is
daily. Habits belong inside goals. The number on screen is a tool, not a verdict.

When making a product, design, copy, or marketing decision, ask:

1. Does this help the user return?
2. Does this punish the user for being human?
3. Does this use familiar words while replacing the broken mechanic underneath?
4. Does this measure the user's life, or just our engagement metrics?
5. Would this feel emotionally safe to someone tired of restarting the same goal?

The line not to cross: do not reintroduce a visible reset-to-zero streak mechanic.

## Brand Positioning

One-sentence brand:

> Sona helps you build an extraordinary life through long runs of returning, not perfect
> streaks.

Underlying brand idea:

> Sona lets you keep going because it feels safe to return after being human.

Sona stacks kindness, peacefulness, and optimism on top of real progress and real
follow-through. It is not anti-hard-work and not pro-laziness. It is pro-progress from a calm
place instead of panic, shame, or self-punishment.

Useful positioning sequence:

1. Life-level fear: "What if another year passes and this is still the goal you keep
   restarting?"
2. Broken system: "Streak apps make one missed day feel like failure."
3. Reframe: "A missed day is a dip, not a reset."
4. Identity promise: "Become someone who follows through."
5. Product proof: goals, consistency, pebbles, flexible rhythms, rest protection,
   reminders.

Lead with the problem, close with the destination:

- Cold hook: "Stop restarting the same goal."
- Reframe: "A missed day is a dip, not a reset."
- Warm destination: "Make your life extraordinary."

Use "Make your life extraordinary" only after belief has been built: onboarding endings,
brand slideshows, App Store screenshot hero moments. Do not use it on the paywall, in push
notifications, or as a pressure tactic.

## Audience

Primary audience: someone who has tried habit apps, planners, streaks, Notion dashboards,
"new Monday" motivation, and complicated reset systems, and is tired of starting over.

Their internal monologue:

- "I know what I need to do. I just do not stay with it."
- "One missed day ruins the whole thing for me."
- "I keep restarting the same goal."
- "I am great at starting, terrible at continuing."
- "I do not trust myself to follow through anymore."
- "I do not need more guilt. I need a system I can return to."

What they want:

- To become someone who keeps promises to themselves.
- To stop carrying the same goal into another month or year.
- To turn vague outcomes into goals they can actually return to.
- To build a calmer, more stable life without hustle-culture panic.
- To work hard from peace, kindness, and optimism rather than shame.

The brand may skew warm and soft, but it should not become childish, patronizing, or
stereotyped. The target is anyone who wants gentler structure, self-trust, and a beautiful
place to return.

## Vocabulary Rules

Use the user's words: streaks, habits, goals, goals, progress, consistency. The product can
use familiar language while changing the underlying mechanic.

Important distinctions:

- **Goal**: the first-class product object. A goal is a purpose container such as
  morning, health, learning, fitness, sleep, recovery, writing, or home.
- **Habit**: a repeated action inside a goal. A habit may be daily, weekly, or monthly.
- **Goal**: the bigger life outcome. Good for marketing and emotional copy, but not the main
  object the app manages.
- **Consistency score**: the main progress instrument. It absorbs misses instead of
  resetting.
- **Run** or **long run of returning**: the positive momentum Sona offers.
- **Streak**: use mainly for the old broken thing the user is escaping: "no streak to break,"
  "the streak that resets on you." Do not call Sona's main score a streak.

"Habit tracker" rule:

- Avoid "habit tracker" in visible marketing when it makes the product feel samey.
- Prefer "goal builder," "habit and goal builder," "a calm system for following
  through," or "the app for people who quit habit apps."
- Keep "habit tracker" in App Store keywords, long descriptions, and paid search only when
  useful for discoverability.

Do not mention competitor names in public scripts. Streak vocabulary is fine; competitor
callouts are not.

## Product Differentiators

1. **Consistency over punishing streaks**
   A scored percentage absorbs misses without resetting. Progress survives real life.

2. **Goal-first organization**
   Goals are first-class. A goal can contain daily, weekly, and monthly habits because
   goals group by purpose, not by cadence.

3. **Rest protection**
   Users can rest/protect missed closed periods. Rest is part of the system, not a loophole
   or a failure.

4. **Flexible cadence**
   Habits can be daily, weekly, or monthly. Not everything should be forced into a daily
   checkbox.

5. **Visible long-run proof**
   Pebble/history grids, consistency badges, stats, progress rings, and a 90% recognition
   mark show momentum without making one missed day feel catastrophic.

6. **Beauty as a product differentiator**
   The app should be beautiful enough that the user wants to return to it. Beauty is not a
   wrapper; it lowers the emotional cost of coming back.

## Current App Shape

Current implemented capabilities:

- Goal-first Home screen.
- Goals persisted in a `goals` table.
- Habits assigned to one or more goals through `habit.goalIds`.
- Habits grouped into Daily, Weekly, and Monthly sections inside the selected goal.
- Completion requirements per habit, such as 1 per day, 3 per day, 2 per week, or 1 per
  month.
- Event-log completions: each completion is a recorded event row.
- Period markers for non-completion states: `missed`, `skipped`, `protectedByRest`.
- Rest protection for missed closed periods.
- Goal-level consistency based on each habit's own cadence-aware score.
- History grids, stats, heatmaps, progress rings, and habit detail screens.
- Per-habit reminder plans.
- Goal artwork/images, including light/dark image fields in the goal model.
- Local JSON backup/export and import using the domain snapshot format.
- Onboarding and paywall gating, unless skipped in development via an environment flag.
- Adapty subscription access checks and Paywall Builder integration.
- PostHog analytics when configured.
- Local demo mode in development.

Current top-level app routes:

- Home: `app/(tabs)/index.tsx`, rendering `HomeFrequencyScreen`.
- Progress: `app/(tabs)/progress.tsx`, rendering `ProgressScreen`.
- Onboarding: `app/onboarding.tsx`.
- Paywall: `app/paywall.tsx`.
- Add Habit modal: `app/add-habit.tsx`.
- Edit Habit modal: `app/edit-habit.tsx`.
- Habit Stats transparent modal: `app/habit-stats.tsx`.
- Day Stats / History transparent modal: `app/day-stats.tsx`.
- Settings: `app/settings.tsx`.
- Test setup: `app/test-setup.tsx` for development.

Removed or not current:

- No cloud account.
- No cloud sync.
- No community rankings.
- No goal challenges or goal battles.
- No global smart/catch-up reminder setting.
- No daily/weekly/monthly tabs as the primary mental model.

## Core User Loops

Daily loop:

1. User opens the app.
2. User chooses All or a specific goal.
3. User sees habits grouped by Daily, Weekly, and Monthly inside that goal.
4. User taps the completion button/ring on a habit card.
5. The card updates current-period progress.
6. User can review consistency, history, reminders, stats, or edit settings only when needed.

First-session loop:

1. User moves through onboarding.
2. User reaches the trial paywall if paywall gating is enabled.
3. After access is granted, the app should get the user to first habit creation quickly.
4. User assigns the habit to a goal and chooses a realistic cadence.
5. User completes the first habit and sees progress begin immediately.

Protect this loop. If a screen delays first habit creation, makes check-in hard, or introduces
too many choices before first value, it is probably wrong.

## Business Logic

Source-of-truth code areas in the repository:

- Data model types: `types/models.ts`.
- Schema: `drizzle/schema.ts`.
- Period boundaries: `utils/periodUtils.ts`.
- Date keys and time invalidation: `utils/dateKey.ts`, `store/timeStore.ts`,
  `hooks/useTimeKeeper.ts`.
- Completion event semantics: `store/completionsStore.ts`.
- Period markers: `store/periodMarkersStore.ts`, `store/habitsStore.ts`.
- Scheduled units: `utils/habitSchedule.ts`.
- Completion percentage math: `utils/completionStats.ts`.
- Notifications: `utils/notifications.ts`, `utils/notificationScheduler.ts`.

Completion semantics:

- A completion is an event row.
- Only `status === "completed"` contributes completion units.
- A habit can require multiple units per period.
- Non-completion states are stored as period markers, not fake completions.
- `missed`: a closed period ended without meeting the requirement.
- `skipped`: an intentional skip.
- `protectedByRest`: a rest period protected the missed period.
- `protectedByRest` does not add numerator credit.
- Protection adjusts the denominator where the shared completion logic supports it.
- Streak-like UI treats `skipped` and `protectedByRest` as successful/safe.

Rest rules:

- Users earn 1 rest period per 5 completed events.
- Rest periods are capped at 3 per habit.
- Closed missed periods can be auto-protected if rest is enabled and a rest period is available.
- Closed means before today for daily habits, before the current ISO week for weekly habits,
  and before the current month for monthly habits.
- Copy should never imply that using rest means failure.

Completion percentage rules:

- Shared math should flow through `utils/completionStats.ts`.
- Do not calculate progress with `completions.length`.
- Use sum of `completionCount` for completed rows.
- Protected periods do not add completed units.
- Habit-card badges include the current period once it has real state, so progress reacts
  immediately.
- Empty active periods should not pull the score down at the start of a new day, week, or
  month.
- Goal consistency averages eligible habit percentages after each habit has been scored
  using its own cadence logic. Do not average raw completion counts across cadences.

Export/import rules:

- Export uses a local JSON domain snapshot.
- Current snapshot format version is `3`.
- Export includes goals, habits, completions, and habit period markers.
- Export excludes subscription state, onboarding metadata, theme choice, and other device
  settings.
- Import replaces current local domain tables and refreshes local stores.
- Import is disabled in Demo Mode.

## Architecture

Core stack:

- React Native.
- Expo.
- Expo Router.
- TypeScript.
- Local SQLite through `expo-sqlite`.
- Drizzle ORM and hand-written runtime migrations.
- Zustand stores.
- Repository pattern for domain access.
- Zod validation at repository boundaries.
- React Native Reanimated and Gesture Handler.
- `react-native-draggable-flatlist` for drag-and-drop/reorder interactions.
- Shopify FlashList.
- Shopify Skia for history/heatmap-style visual rendering.
- Expo Notifications.
- Adapty for subscriptions and paywall handling.
- PostHog for analytics when environment variables are configured.
- Sentry for error reporting.

Important architectural rules:

- Runtime source of truth is local SQLite.
- UI and stores must not talk directly to SQLite or Drizzle.
- UI and stores go through repository interfaces.
- Repository interfaces live in `repositories/interfaces/`.
- SQLite implementations live in `repositories/implementations/`.
- Repository wiring lives in `store/repositories.ts`.
- Drizzle schema lives in `drizzle/schema.ts`.
- Runtime migrations live in `drizzle/migrations.ts`.
- Migrations are append-only once shared.
- This repo hand-writes migrations. Do not rely on `yarn db:generate` for runtime migration
  correctness.
- Models should stay flat because Zustand selectors rely on shallow comparison patterns.
- Date-sensitive derived values must depend on shared time invalidation, such as
  `useTimeChangeToken()` or `useTodayKey()`.

Current app access:

- Main runtime is local-only.
- `store/authStore.ts` handles local reset/delete concerns, not network auth.
- Onboarding and paywall are local gates.
- `EXPO_PUBLIC_SKIP_ONBOARDING_PAYWALL=true` bypasses onboarding/paywall in development.
- Paywall and subscription logic are disabled when that bypass is active.

## Engineering Standards

North star: no blind flying. Code should be testable, observable, maintainable, strictly
typed, library-first, simple-first, and cross-platform.

Rules:

- One React component per file.
- UI components render; hooks own logic and side effects.
- Use repository-backed stores/hooks for data access.
- Do not import SQLite/Drizzle directly from UI, components, hooks, or stores.
- Use `repositories/adapters/logger`, not `console.*`, for app code logging.
- No `any`.
- Avoid type assertions and non-null assertions where possible.
- Use theme tokens, not hardcoded component colors.
- Use cross-platform libraries and Expo SDK packages when possible.
- Use `react-native-safe-area-context`, not built-in `SafeAreaView`.
- Evaluate well-maintained libraries before hand-rolling complex gestures, date logic,
  animations, charts, or cross-platform behavior.

Risk-based validation:

- UI/copy/layout changes usually need focused lint/typecheck and simulator or visual review.
- Domain, persistence, subscription, date/time, or migration changes need targeted automated
  tests.
- Full `yarn run check` is a commit-time gate, not something to run after every small change.

Useful commands:

```sh
yarn lint
yarn typecheck
yarn test path/to/test.test.ts
yarn run check:quick
yarn run check
yarn dev:build
yarn dev:start
yarn preview:build
yarn build:ios:production
```

## Design Direction

The current visual direction is painterly, atmospheric, calm, dignified, contemplative, warm,
beautiful, adult, and emotionally safe. The design should feel like the same world as the
onboarding watercolor landscape paintings.

Visual principles:

- Painters, not generic UI designers.
- Soft edges over sharp edges.
- Warm and muted over cool and saturated.
- Quiet typography.
- Atmospheric depth instead of hard card stacks.
- Quiet motion that acknowledges rather than performs.
- Iconography in a soft outline register.
- Beauty as functional emotional safety, not decoration.

Avoid:

- Hard drop shadows.
- Bright candy accents.
- Confetti or loud celebration.
- Red failure warnings or broken-chain anxiety.
- Decorative ornament, watercolor splashes, gradient blobs, or unrelated stickers.
- Childish playfulness.
- Edo-Japan literalism such as torii gates, enso circles, sumi-e borders, or woodblock motifs.
- Dense analytics dashboards.
- Marketing landing-page layout inside the app.
- Feature explanation text when a screen should instead make the workflow obvious.

The handoff test:

> A user moving from the last onboarding slide into the Home screen should feel "same app,
> same artist, same world."

## Visual System

Typography:

- Nunito for headings, habit names, screen titles, and warm emphasis.
- Inter for body, labels, stats, settings, and dense information.
- Playfair Display is used for rare display hero numbers, especially progress percentages.
- Headings usually use weight 700, not 800 or 900.
- Body text usually uses 400 or 500.
- Compact panels should use compact headings, not hero-scale type.

Layout:

- Mobile-first.
- Safe-area aware.
- 16 to 24px horizontal screen padding.
- 8px spacing rhythm.
- 44x44 minimum touch targets.
- Avoid nested cards inside cards unless the inner item is a real control group or repeated
  item.

Shape and elevation:

- Continuous-curve rounded corners where available.
- Radius scale: 12, 16, 20, 24, 32, full pill.
- Soft atmospheric shadows with large blur and low opacity.
- Hairline borders only when needed.

Current theme tokens from `constants/theme.ts`:

Light theme:

| Token | Value | Role |
| --- | --- | --- |
| `background` | `hsl(39, 58%, 94%)` | Warm parchment canvas |
| `backgroundSecondary` | `hsl(38, 46%, 92%)` | Muted secondary background |
| `surface` | `hsl(38, 62%, 95%)` | Habit cards and warm panels |
| `surfaceElevated` | `hsl(40, 68%, 96%)` | Form rows and sheets |
| `surfaceMuted` | `hsl(48, 28%, 84%)` | Icon tiles and nested elements |
| `text` | `hsl(125, 25%, 16%)` | Primary forest text |
| `textSecondary` | `hsl(112, 15%, 32%)` | Secondary text |
| `primary` | `hsl(96, 25%, 30%)` | Muted forest selection/progress |
| `accent` | `hsl(15, 48%, 48%)` | Everyday CTA |
| `accentText` | `#FFFFFF` | Text on CTA |
| `accentSoft` | `hsl(25, 62%, 91%)` | Gentle selected controls |
| `accentHigh` | `hsl(210, 34%, 43%)` | High-stakes actions |
| `success` | `hsl(93, 24%, 37%)` | Positive/completed |
| `warning` | `hsl(36, 39%, 42%)` | Warning/middling |
| `error` | `hsl(14, 45%, 44%)` | Error/destructive |
| `border` | `hsl(38, 32%, 78%)` | Hairline dividers |
| `goldLight` | `hsl(43, 48%, 62%)` | Progress in motion |
| `goldDark` | `hsl(39, 58%, 36%)` | Trophy/destination |
| `skyTop` | `hsl(38, 70%, 80%)` | Painted sky top |
| `skyBottom` | `hsl(43, 66%, 91%)` | Painted sky bottom |
| `haze` | `hsla(40, 64%, 86%, 0.55)` | Atmospheric wash |

Dark theme:

| Token | Value | Role |
| --- | --- | --- |
| `background` | `hsl(220, 22%, 14%)` | Moonlit dusk canvas |
| `backgroundSecondary` | `hsl(220, 18%, 22%)` | Muted secondary background |
| `surface` | `hsl(220, 16%, 19%)` | Card/sheet surface |
| `surfaceElevated` | `hsl(220, 14%, 23%)` | Form rows and sheets |
| `surfaceMuted` | `hsl(220, 12%, 21%)` | Icon tiles and nested elements |
| `text` | `hsl(40, 35%, 92%)` | Primary text |
| `textSecondary` | `hsl(40, 15%, 70%)` | Secondary text |
| `primary` | `hsl(210, 50%, 70%)` | Selection/progress |
| `accent` | `#C0786D` | Everyday CTA |
| `accentText` | `#FFFFFF` | Text on CTA |
| `accentSoft` | `hsl(15, 22%, 29%)` | Gentle selected controls |
| `accentHigh` | `hsl(210, 50%, 60%)` | High-stakes actions |
| `success` | `hsl(150, 35%, 55%)` | Positive/completed |
| `warning` | `hsl(35, 50%, 60%)` | Warning/middling |
| `error` | `hsl(15, 50%, 60%)` | Error/destructive |
| `border` | `hsl(220, 14%, 28%)` | Dividers |
| `goldLight` | `hsl(40, 55%, 70%)` | Progress in motion |
| `goldDark` | `hsl(40, 55%, 60%)` | Trophy/destination |
| `skyTop` | `hsl(25, 50%, 32%)` | Painted sky top |
| `skyBottom` | `hsl(220, 22%, 16%)` | Painted sky bottom |
| `haze` | `hsla(220, 18%, 24%, 0.55)` | Atmospheric wash |

Color roles:

- `primary`: selection indicators, links, rings, progress strokes. Do not use as the main
  action-button color.
- `accent`: everyday CTAs such as Add, Save, Create, Confirm, Continue, Clock In, Join, and
  FAB.
- `accentHigh`: high-stakes account/subscription actions only, such as Subscribe, Upgrade,
  Restore, Sign Out, Delete.
- `success`, `warning`, `error`: feedback states only, not decoration.
- `goldLight` and `goldDark`: earned completion and excellent consistency only.

Accessibility:

- WCAG 2.1 AA is the target.
- Normal text needs 4.5:1 contrast.
- Large text and UI components need 3:1 contrast.
- Do not rely on color alone for completed, missed, skipped, or protected states.
- Every interactive element needs a clear role/label.
- Dynamic text must not overflow buttons, cards, or compact panels.

## Mascot Direction

The mascot is a small cozy hedgehog-like forest companion. It is a brand asset, not a game
character or decoration system. It should be rendered in the same soft watercolor/gouache
register as the onboarding paintings: loose diffused edges, visible paper texture, warm muted
palette, clean silhouette, and gentle expression.

The mascot should feel:

- Gentle.
- Cozy.
- Quietly encouraging.
- Proud of small progress.
- Rest-friendly.
- Emotionally safe.

The mascot should never feel:

- Hyperactive.
- Judgmental.
- Sarcastic.
- Babyish.
- Loudly gamified.
- Demanding.

Use one mascot moment per screen at most. Dense utility screens can use little or no mascot
art. The UI must remain clear without the illustration.

Core mascot states:

- Neutral: Home/default helper.
- Happy: habit completed or positive empty state.
- Resting: rest/protection.
- Sleepy: low-energy reminders.
- Focused: creating/editing habits.
- Celebrating: recap or earned outcome.
- Concerned: missed period or error, but kind and nonjudgmental.

## Major Screen Intent

Home:

- Main daily-use surface.
- Goal-first.
- Selected goal is the primary context.
- Daily, Weekly, and Monthly are section headers inside the goal, not top-level navigation.
- Completion must be the most obvious action.
- Goal consistency should stay visible.
- Avoid repeating the selected goal name on every card.

Habit cards:

- Core object.
- Warm tactile surface.
- Habit icon/name.
- Main completion ring/button.
- Compact consistency badge.
- Small history strip.
- Rest affordance when available.
- Destructive actions never compete visually with completion.

Add/Edit Habit:

- Quiet setup surface, not a configuration cockpit.
- Large habit-name input as visual focus.
- Selected icon/color preview.
- Calm rows for Appearance, Schedule, Goal, and Reminder.
- Nested sheets should have one purpose each.
- Schedule starts with Daily / Weekly / Monthly.
- Goal is personal goal selection.
- Reminder supports per-habit reminder planning.

Stats and History:

- Explain behavior visually without becoming a dense analytics dashboard.
- Use heatmaps, calendar cells, progress rings, compact percentages, and range toggles.
- Protected/rest periods must be distinct from completed periods.
- Missed states should be clear but gentle.

Progress:

- Show long-run proof and goal-level direction.
- Use painterly mountain/path metaphors and warm card surfaces.
- Reserve hero-scale display numbers for truly important consistency moments.

Settings:

- Utilitarian and scannable.
- Rows and simple panels.
- Subscription, local backup, appearance, sound, feedback, roadmap, review, and local delete
  controls.
- Little or no mascot art.

Onboarding:

- Open on the restart loop.
- Move users toward first habit creation.
- Build emotional relief around the idea that progress survives real life.
- End by bridging to the destination: making life extraordinary through returning.
- Do not make the mascot dominate emotional-anchor screens; the atmospheric paintings carry
  those moments.

Paywall:

- Current implementation is a 2-step 7-day free-trial paywall: reminder, then pricing.
- It should be supportive and clear, not aggressive.
- It should state terms plainly.
- Do not use fake urgency, fake scarcity, fake testimonials, fake user counts, fake savings
  pressure, or guilt.

## Reminders

Per-habit goal reminders are active. They help users plan reminders around the required
completion count.

Reminder modes:

- `off`: no reminders.
- `once`: one reminder for the current period while incomplete, then shifts to the next
  period once satisfied.
- `onPace`: computes the next useful reminder from frequency, required completions, current
  progress, and preferred reminder window.
- `specific`: exact reminder times and selected weekdays/month days.

UX principles:

- Completion-first: start from required completions.
- Generate then adjust.
- Single-screen comprehension.
- Low-friction edits.
- Safe defaults.

Global smart/catch-up reminders were retired. Do not reintroduce them unless Nicholas asks.

## Subscription And Paywall

Current subscription stack:

- Adapty SDK.
- Access level default: `premium`.
- Current product IDs in code: `subscription_weekly_1`, `subscription_yearly_1`.
- Current fallback paywall prices in code: weekly `$7.99`, yearly `$39.99`, yearly equivalent
  `$0.77/week`.
- Current flow emphasizes a 7-day free trial, especially on yearly fallback.
- Placement IDs default to `onboarding` and `settings`.

Do not assume old public identifiers, legal URLs, or product IDs are brand guidance.

Paywall ethics:

- No fake countdowns.
- No fake scarcity.
- No fake testimonials.
- No fake user counts.
- No guilt.
- No pre-usage rating prompt.
- Lead with real value: consistency, rest protection, realistic rhythms, reminders,
  progress history, and the 90% bar.
- State billing terms plainly.

## Analytics

Do not over-invest in attribution at the early revenue stage. App Store referrer data,
browse/search split, install spikes, and basic activation/retention events are enough for
early content decisions.

Product analytics questions:

1. Are onboarding completers creating a habit?
2. Are habit creators reaching first completion?
3. Are first completers coming back?
4. Is paywall conversion changing independently of activation and retention?

Current event names seen in code include:

- `app_open`.
- `onboarding_step_viewed`.
- `onboarding_step_advanced`.
- `onboarding_abandoned`.
- `onboarding_completed`.
- `onboarding_skip_intro`.
- `paywall_viewed`.
- `paywall_cta_tapped`.
- `paywall_plan_selected`.
- `paywall_converted`.
- `subscription_paywall_result`.
- `subscription_purchase_result`.
- `subscription_restore_result`.
- `subscription_manage_opened`.
- `add_habit_viewed`.
- `add_habit_dismissed_without_save`.
- `habit_created`.
- `habit_completed`.
- `first_habit_completed`.
- `review_prompt_shown`.
- `review_prompt_request_attempted`.
- `local_data_deleted`.
- `backup_exported`.
- `backup_imported`.
- `settings_feedback_opened`.
- `settings_roadmap_opened`.
- `settings_review_started`.
- `progress_opened`.

Onboarding flow analytics:

- `onboarding_step_viewed` is the source of truth for screen reach and funnel
  drop-off.
- `onboarding_step_advanced` records movement from one onboarding step to the
  next, including direction and trigger.
- Onboarding, review-prompt, and onboarding-sourced paywall events should carry
  `onboardingSessionId`, an anonymous per-attempt join key. Historical PostHog
  charts may fall back to `distinct_id` for events captured before that property
  existed.

Do not rename analytics events without a migration plan. Add properties only when they answer
a concrete analysis question.

## Marketing Operating System

For marketing and external strategy, keep the focus on transformation, not feature inventory.
Product proof should appear through screen recordings and concrete moments, not long verbal
feature lists.

Content pillars:

- The goal you keep postponing.
- The compounding math.
- The restart spiral.
- A miss is a dip, not a reset.
- Become someone who follows through.
- Calm system, not productivity guilt.
- Beauty as a place to return.

Example hooks:

- "do not carry the same goal into another year"
- "20 minutes a day becomes 122 hours in a year"
- "the streak breaks and I just stop caring"
- "one missed day should not erase the whole habit"
- "the goal is not never missing. the goal is coming back"
- "I found an app for people who hate streaks"
- "stop restarting the same goal"

Comment reply examples:

- "it tracks consistency instead of resetting you"
- "the whole idea is progress that survives real life"
- "honestly, streaks work for some people. I built this for people who spiral when the streak
  breaks"
- "that is exactly what I am trying to avoid. the app is built around consistency without
  shame"

Hard rules:

- No competitor names in scripts.
- Do not use "Make your life extraordinary" on the paywall or push notifications.
- Do not imply rest is failure.
- Do not promise the app will make the user perfect.
- Do not make product content feel like a generic habit-tracker ad.

## Sample Product Content

Habit examples:

- Drink water.
- Take vitamins.
- Go for a walk.
- Exercise.
- Stretch 10 minutes.
- Sleep on time.
- Morning run.
- Make the bed.
- Plan your day.
- No phone first hour.
- Night reset.
- Meditate.
- Gratitude.
- Journal.
- Read 20 minutes.
- Language practice.
- Write.
- Deep work.
- Weekly review.
- Laundry.
- Budget check-in.

Goal examples:

- Morning.
- Evening.
- Health.
- Learning.
- Fitness.
- Mindfulness.
- Home.
- Writing.
- Recovery.
- Sleep.

Frequency examples:

- Drink water: Daily, 4 completions.
- Meditate: Daily, 1 completion.
- Exercise: Weekly, 3 completions.
- Read more books: Weekly, 3 completions.
- Laundry: Weekly, 2 completions.
- Deep clean: Monthly, 1 completion.
- Budget review: Monthly, 1 completion.

Goal artwork prompts should stay in the cozy painterly world: soft watercolor/gouache,
warm light, gentle depth, readable composition, no harsh neon, no busy sticker collage, no
literal religious iconography.

## External AI Instructions

When helping with this app:

- Treat **Sona** as the public app name.
- Keep goals first-class.
- Keep progress/consistency visible.
- Do not collapse the product back into daily/weekly/monthly tabs as the main model.
- Avoid streak-reset mechanics.
- Avoid shame, urgency, guilt, fake scarcity, or fake social proof.
- Use a calm, adult, painterly design register.
- Use concrete product surfaces, not generic productivity-app advice.
- Suggest screen-by-screen improvements rather than broad rebrands.
- Preserve the current visual world unless Nicholas explicitly asks for a new one.
- If proposing code changes, respect Expo/React Native, local SQLite, Drizzle, Zustand,
  repository boundaries, strict typing, theme tokens, and cross-platform behavior.
- If suggesting new complex interactions, prefer well-maintained React Native/Expo-compatible
  libraries before custom gesture or animation systems.
- If uncertain, ask for the current screenshot or source file rather than inventing the app.
