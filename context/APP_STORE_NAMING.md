# Daybreak — App Store title / subtitle / keyword candidates

Updated: 2026-06-17. Grounded in live ASO evidence (June 2026), NOT internal
brand-doc rules (the user flagged those may not reflect what's most effective).

## Evidence used
- Apple limits: title 30 chars, subtitle 30 chars; title carries the most
  search weight, subtitle second. Both are indexed.
- "habit tracker" is a largest-volume category keyword — but the category is
  dominated by giants (Streaks, Finch ~700k ratings). For a NEW/pre-launch app,
  a tight cluster of high-intent mid-volume terms beats chasing the broad term.
- Real answer = run Apple's free Product Page Optimization A/B test (title/icon
  variants, install-rate decides). Everything below is a hypothesis to test.
- Don't repeat a word across title+subtitle — both are indexed, so duplication
  wastes keyword coverage.

Current (before change): Title "Daybreak: habits that stick" /
Subtitle "The No-Streak Routine Builder" /
Keywords tracker,streak,daily,goals,planner,consistency,motivation,self,care,discipline,morning,checklist
(Title is the weak one — "habits that stick" is the most generic phrase in the
category and ranks for nothing distinctive.)

## DECISION (2026-06-17) — FINAL
- **Title (24):** `Habit Tracker - Daybreak` — keyword-forward (generic term first for
  ranking), brand second. App is **Daybreak** (NOT "Daystreak" — that would
  contradict the anti-streak positioning).
- **Subtitle (29):** `Beautiful habits that forgive` — the title is pure generic
  keyword, so the subtitle carries BOTH differentiators: *beautiful* (the #1 edge
  nothing else in the category leads with) + *forgive* (the no-streak promise).
  No overlap with the title's "habit tracker".
- **Keywords (95/100 chars, 11 terms):** "tracker" dropped (now in title); "streak"
  KEPT here to recover the indexed term we gave up by not putting it in the subtitle.

Final keyword line:
`routine,streak,daily,goals,planner,consistency,motivation,selfcare,discipline,morning,checklist`

Note on the trade vs the earlier "Calm habits, no broken streaks" subtitle: that one
indexed "streaks" in the subtitle; switching to "Beautiful habits that forgive" loses
that, so "streak" moved back into the keyword field — net neutral on search, clear win
on positioning/distinctiveness.

The variants below are retained as future PPO A/B test ideas.

## A/B test candidates (all verified <= 30 chars)

### Variant A — max search volume
- Title (23): `Daybreak: Habit Tracker`
- Subtitle (30): `Calm habits, no broken streaks`
- Coverage: habit, tracker, calm, habits, streaks. Generic identity; competes
  head-on for the big term.

### Variant B — balanced (recommended starting point)
- Title (28): `Daybreak: Calm Habit Tracker`
- Subtitle (29): `Beautiful habits that forgive`
- Keeps the volume term AND plants differentiators (calm / beautiful / forgive).

### Variant C — max differentiation
- Title (25): `Daybreak: Habits, Painted`
- Subtitle (29): `Habits that survive real life`
- Leads with the AI-painted worlds (nothing else has this). Highest distinctiveness,
  lower raw search volume ("tracker" moves to keywords).

## Keywords (cleaned)
`routine,streak,daily,goals,planner,consistency,motivation,selfcare,discipline,morning,checklist,wellbeing`
- Fixed `self,care` (two wasted slots) -> `selfcare`.
- Strong default (test, don't treat as gospel): drop terms that end up in the
  chosen title/subtitle since Apple indexes those automatically, and backfill
  with new terms (e.g. journal, mindfulness, focus).

## Recommendation
Ship B as the baseline, A and C as PPO test variants. Let install rate pick.
