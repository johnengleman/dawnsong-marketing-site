# Design

Updated: 2026-05-31

The visual and interaction source of truth for the Sona routine builder and habit
consistency app. This is a merged document that absorbs the former `VISUAL_LANGUAGE.md` (the visual register),
`DESIGN_SYSTEM.md` (the paste-friendly design brief), `THEME_SYSTEM.md` (the code-token
reference), and `MASCOT_ART_DIRECTION.md` (character art rules).

Structure: visual principles → design system & components → theme tokens → mascot art
direction.

> **Register note.** Part 1 (Visual Principles) is the **current, authoritative register**:
> painterly, atmospheric, calm. Part 2 (Design System) preserves the still-correct color
> tables, tokens, and component patterns from the older brief, but its "calm-cute,
> mascot-led" framing is **legacy and being phased out**. Where Part 1 and Part 2 disagree
> on register, **Part 1 wins**. Legacy cuteness framing is marked inline.

---

# Part 1 — Visual Principles (the register)

What the app *believes* lives in `PHILOSOPHY.md`. How it *looks* lives here. Tokens are in
Part 3 and in `constants/theme.ts`.

## The instinct behind the refresh

In May 2026 a 16-screen onboarding shipped with seven atmospheric watercolor paintings —
landscapes that established a new emotional register: calm, dignified, soft-edged,
contemplative, warm in palette, patient in pacing.

The rest of the app has not fully caught up. Some surfaces (home header mountain, consistency
badge, pebble grid) are already close. Others (CTA buttons, form modals, list rows) are still
in the older cute, mascot-led register that preceded the paintings. The refresh closes that
gap.

The handoff bar: **a user transitioning from the last onboarding slide to the home screen
should feel "same app, same artist, same world."**

## The seven principles

### 1. Painters, not designers

The mental model is not "what would a UX designer do here?" It's: *what would the painter who
made these landscapes do?* The painter avoids hard borders, sharp drop shadows, bright
saturated colors, geometric thick-stroke icons, and weight-contrast hierarchy. The painter
uses soft edges, atmospheric depth, warm palettes, dignified spacing, quiet typography.

These are generalizable design qualities — **calm, dignified, contemplative, patient**. They
overlap with Japanese watercolor tradition because that tradition prizes the same values. We
borrow the register, not the motifs (see "What we don't do").

### 2. Soft over sharp

Every edge is a choice; the default is soft.

- **Corners**: continuous-curve squircles using the `borderRadius` scale. Never sharp 90° corners on user-facing surfaces. Tables and data rows can be sharper.
- **Shadows**: atmospheric falloff, not crisp drop shadows. Larger radius, lower opacity, neutral black tinted with the theme. Never hard-edged stamped shadows.
- **Borders**: when present, hairline (`StyleSheet.hairlineWidth`) and low-alpha. Often the right answer is *no border at all* — let the soft shadow and color difference do the work.
- **Backgrounds**: prefer subtle gradient or texture over flat fills on large areas. The cream surfaces already do this; honor it everywhere.

### 3. Warm over cool, muted over saturated

The palette is locked. Don't shuffle it. Polish it.

- **Surfaces**: the warm cream family (`surface`, `surfaceElevated`, `surfaceMuted`) — the white-paper-of-a-watercolor under everything.
- **Text**: the deep forest-green family (`text`, `textSecondary`). Dignified, never harsh black.
- **Accent (warm action)**: the peach `accent`. Lower its saturation if it ever feels candy-bright against the paintings. Aim: *earned warmth*, not pop.
- **Accent (high-stakes)**: the dusty blue `accentHigh`. Reserved for paywall, subscribe, restore, sign-out. Don't dilute its meaning.
- **Earned gold**: `goldDark` for trophies, `goldLight` for progress in motion. Honor goldLight=motion / goldDark=destination.
- **Pebble blue (data accent)**: the dusty blue in the pebble grid — calm, slightly faded, never a bright UI blue.

When a screen feels off, the fix is almost always *reducing saturation* or *warming the
palette*, not introducing new colors.

### 4. Quiet typography

The existing pairing is correct:

- **Nunito** for headings (habit names, screen titles) — rounded, warm, dignified.
- **Inter** for body, numbers, dates, stats — clean, readable.
- **Playfair Display** only for rare scenic or hero display moments, such as the `ProgressHero` number.

Don't change fonts. Polish weights and spacing:

- Headings usually `700` — never `800/900` extra-bold (reads urgent, breaks calm).
- Controls and status labels usually `600`; body and metadata usually `400` or `500`.
- Compact stats can use `700`, but they should not overpower habit names or screen titles.
- Use zero letter spacing by default; small caps / eyebrow labels may use slight positive tracking.
- Avoid all-caps for anything longer than a 2-word eyebrow.

### 5. Atmospheric depth

Layer surfaces with *atmosphere*, not stacks. Multiple shadows + opacities + soft gradients
beat one flat card with a hard border. A card that *sits on cream* with a subtle
warmer-than-background tint reads as painted. When something needs emphasis, the answer is
usually a glow or a gentle scale, not a thick border or bright color. The pebble grid is the
canonical example — each pebble is a tiny painted object, not a UI checkbox.

### 6. Quiet motion

Motion exists to acknowledge, not perform.

- **Easing**: soft cubic, never linear, never bouncy springs with high overshoot. `Easing.out(Easing.cubic)` is the canonical curve.
- **Duration**: 300–500ms for most things. (Sheet/UI state transitions can be quicker — see Part 2 Motion.)
- **Scale on press**: subtle (`0.97–0.985`), never dramatic.
- **Fades**: preferred over slides where both work.
- **Celebrations**: soft glow + gentle scale, never confetti, trumpets, or gold-burst-on-completion. The trophy-at-90% icon is the canonical celebration: present, dignified, earned.

### 7. Iconography in the painter's register

- **Default style**: Ionicons *outline* variants. Filled icons reserved for state changes (selected toggle, active tab, completed check).
- **Stroke weight**: Ionicons default; don't go heavier.
- **Custom icons**: hand-drawn or watercolor register — never geometric flat-design or glyph-style stroke icons that compete with Ionicons in weight.
- **Decorative motifs (mountains, cairns, paths)**: can appear sparingly as visual anchors. Don't decorate every surface — every additional motif costs the others.

## What we don't do

- **No Edo-Japan literalism.** No ensō circles, torii gates, sumi-e brushstroke borders, woodblock decorations, or Japanese-style logo treatment. We borrow register, not motifs.
- **No hard drop shadows.** Atmospheric falloff only.
- **No bright/saturated UI accents.** If a color reads "alert" or "pop" or "candy," it's wrong.
- **No bold celebratory animations.** No confetti, fireworks, slot-machine feedback. Celebration is *recognition*, not spectacle.
- **No decorative ornament.** Hand-drawn dividers, brushstroke flourishes, watercolor splashes — they age fast and don't survive scale. Keep the app quiet.
- **No streak-app energy.** Red exclamation marks, broken-chain warnings, "you're about to lose your progress" framing. The product escapes this; the UI shouldn't sneak it back in.
- **No childish playfulness.** Cute is no longer a primary register; *charming-but-adult* is. The mascot is kept but rendered in the soft-watercolor register, not glossy cartoon.
- **No mascot on the onboarding emotional-anchor screens.** The atmospheric paintings carry those screens alone.

## Surfaces that need refresh — priority order

The token layer landed 2026-05-20 (`constants/theme.ts` warmed to the painterly register;
atmosphere tokens added; contrast tests passing). Remaining work is screen-by-screen polish.

**Tier 1 — high leverage:**

1. **Home screen header art** — the hedgehog-in-landscape header is the first thing every user sees daily. Keep the hedgehog and landscape; re-paint in the soft-watercolor register (misty hills, warm light, diffused edges). Same composition, restyled art.
2. **CTA buttons everywhere** — propagate the onboarding peach-pill-with-soft-shadow treatment to Add Habit, Save, Done. Replace any old multi-stop gradient + inner highlight buttons.
3. **Add/Edit Habit modal** — bring form fields, picker rows, and modal chrome up to the painterly register: softer edges, warmer surfaces, lighter shadows, more breathing room.
4. **Habit completion celebration** — soft warm glow on the card, a subtle gold halo on the consistency badge at ≥90%; dignified, not animated.

**Tier 2 — moderate leverage:** 5. Settings list rows (quieter is fine; soften press states). 6. Habit stats / detail modal (charts stay readable; soften the frame around the data). 7. Weekly / Monthly views (audit for sharp edges and off-register accents). 8. Progress screen (align the mountain image with the onboarding paintings).

**Tier 3 — low leverage:** 9. Empty states. 10. Error / permission / edge-case screens. 11. 404 / Not Found (the one place the mascot can keep a primary role).

## The mascot question

> **Decision (2026-05-20):** The hedgehog mascot is **kept.** An earlier draft proposed
> replacing it with a mountain mark — that direction is superseded. The mascot is a hard-won
> brand asset. What changes is its *rendering*: every mascot image is being re-painted in the
> soft-watercolor register so the character lives in the same painted world.

The hedgehog stays as the character across the app — home header, empty states, rest moments,
sign-in, 404, marketing. Full character rules are in Part 4.

## The 90% bar, visually

The 90% bar is the load-bearing product promise and deserves visual recognition wherever it
appears. The canonical treatment is a trophy icon in `goldDark` next to the percentage.

- The trophy appears only at ≥90% — nothing below.
- The trophy is `goldDark`, never bright yellow, never theme-text.
- The trophy stays at full opacity even when the rest of the badge dims.
- The 90% bar is a *recognition mark*, not a streak-app target. Don't make it scary to fall below.

## How to use this register when refreshing a screen

1. **Painters, not designers.** What pulls you out of the onboarding-painting world?
2. **Edges:** any hard corners, borders, drop shadows? Soften.
3. **Saturation:** anything "candy" or "pop"? Desaturate, warm.
4. **Hierarchy:** anything reading urgent/alert when it should be calm? Reduce its weight.
5. **Mascot check:** is the mascot here? Should it be, per the rules above?
6. **The handoff test:** mentally place this screen right after the last onboarding slide. Same app? If not, what breaks the spell?

The screen passes when the answer to step 6 is yes. Refresh one screen at a time — ship it,
look at it for a day, move on. Don't refresh in parallel across many screens.

---

# Part 2 — Design System & Components

> **Legacy framing note.** This part keeps the still-correct component patterns, color usage,
> and layout rules from the older paste-friendly brief. Its original "calm, cute, mascot-led"
> product-feel language is **legacy** — the current register is the painterly-atmospheric one
> in Part 1. Where they disagree, Part 1 wins. Color tables and tokens below are current.

## Product feel

The app is a local-first routine builder with habit tracking underneath, especially for people
overwhelmed by streak pressure, feature-heavy habit apps, and noisy productivity tools. The
interface should feel calm, forgiving, minimal, tactile, and focused. Checking in should feel
quick and pleasant, not like operating a dense analytics product.

*(Legacy: earlier briefs framed the guiding phrase as "a calm, cute daily ritual." The
current register — Part 1 — is charming-but-adult and painterly, not cute-led.)*

### Design principles

1. **Minimalism first**: reduce cognitive load; make the next action obvious; avoid feature overload.
2. **Calm over stimulation**: breathable, low-pressure screens. Avoid harsh contrast, crowded layouts, aggressive gamification, constant movement.
3. **Charming, not childish**: emotionally warm and polished for adults. *(Legacy briefs said "cute, not childish.")*
4. **Forgiveness is part of the product**: rest protection should look supportive, not punitive. Missed states clear but not shaming.
5. **Tactile surfaces**: cards, pills, buttons feel touchable through soft elevation, rounded continuous corners, restrained press states.
6. **Progress is visual but quiet**: rings, small charts, heatmap cells show momentum at a glance without turning screens into dashboards.
7. **Consistency beats novelty**: reuse the same typography, spacing, shapes, color roles, and interaction patterns across home, forms, stats, settings, and sheets.

## Audience & positioning

Primary audience: people frustrated by streaks and all-or-nothing tracking; people with ADHD
or attention challenges who need a calmer interface with fewer decisions; users who want a
soothing, emotionally supportive app rather than a productivity dashboard; TikTok-discoverable
users who respond to visually memorable products.

Positioning: **not** a feature-heavy tracker with every metric; **not** a harsh streak app
that punishes missed days; **not** a cluttered decoration-heavy app. **Yes** to area-first
organization, minimal check-ins, forgiving progress, and calm visuals.

## Color system

Use semantic tokens from `constants/theme.ts`; do not hardcode colors in app code. Full token
tables are in Part 3. Summary of usage roles:

- `background`: full-screen background. `surface`: habit/recap cards. `surfaceElevated`: form rows, sheets, modal internals. `surfaceMuted`: icon tiles and nested elements.
- `primary` (muted forest olive): selection indicators — day-selector rings, filter pills, chart accents, progress strokes, links. **Never** for action buttons.
- `accent` (peach): everyday CTAs — Add, Save, Create, Confirm, Continue, Clock In, Join, FAB.
- `accentHigh` (blue): high-stakes account actions only — Subscribe, Upgrade, Restore Backup, Sign Out, Delete Account. Never for habit creation/editing.
- `success` / `warning` / `error`: feedback states only, not decoration.
- `goldLight` / `goldDark`: celebratory completion and excellent consistency only.
- Keep color balance roughly 60-30-10: mostly neutral/surface, then forest text/olive, then small peach/gold emphasis.
- All color changes must maintain WCAG 2.1 AA contrast and pass `utils/__tests__/themeContrast.test.ts`.

## Typography

Core font system — **Nunito** for warm titles and habit names, **Inter** for body text,
labels, controls, numbers, stats, settings, and dense information, and **Playfair Display**
only through `typography.roles.heroDisplay` for rare emotional display moments. Font family,
role, and type-scale tokens are in Part 3.

- Prefer semantic roles (`screenTitle`, `sheetTitle`, `cardTitle`, `metadata`, `buttonLabel`,
  `compactStat`, etc.) over choosing font families ad hoc in components.
- Use zero letter spacing by default; give small labels slight positive tracking only when
  they need an eyebrow/utility treatment.
- Use `numberOfLines`, `ellipsizeMode`, or `adjustsFontSizeToFit` where dynamic text could overflow.
- Use compact headings inside cards and sheets; reserve very large type for sign-in/onboarding or rare hero moments.

## Spacing & layout

Use the 8px-based spacing scale (Part 3). Prefer 16–24px horizontal screen padding; `lg`
padding for most cards and `xl`/`2xl` for larger modal or onboarding sections; keep dense
operational areas compact but preserve tap-target size; use safe-area insets on all screen
edges and sheet bottoms.

## Shape, radius & elevation

Soft continuous corners (Apple-style squircles). Radius tokens in Part 3. Use
`borderCurve: "continuous"` where available on iOS. Main habit-card surfaces use large rounded
shapes. Pills and icon buttons are fully rounded. Use soft shadows sparingly; pair iOS shadow
values with Android `elevation`. Avoid nested card-on-card layouts unless the inner element is
a genuine control group or repeated item.

## Core components & patterns

### Home header

Visual header with image background, mascot/progress art, and a collapsed sticky state. The
selected area header is the first-class control layered with it: area image/icon, area
name, cadence summary, and a visible Progress action. Feels like a dashboard glance, not a
marketing hero. Use rounded bottom corners (`borderRadius["2xl"]`), soft floating surfaces,
area consistency as the main information anchor, and a compact collapsed header. Avoid
large explanatory text or a taller header without a clear information need.

### Habit cards

The core object. Tactile, warm, information-dense without crowding. Expected anatomy: warm
`surface` shell with soft radius, habit icon area, habit name in Nunito heading style,
completion button/ring as the main action, compact
consistency badge, small completion-history strip, rest control when available, and a
long-press/overflow menu for secondary actions.

Do not show the area name on every habit card when the list is already filtered to an
area; that repeats the selected context and makes the Home screen feel busier. If a card is
shown in an all-areas context, use the area image/icon or a very small label only when it helps
orientation.

Rules: completing a habit is the most obvious action; destructive actions are never visually
equal to completion; `success` for completed states and gold for excellent consistency; habit
colors may personalize icons/progress but must work in both themes.

### Pills & segmented controls

Used for area selection, frequency selection, expandable form sections, tabs, and compact
choices. Full radius, subtle borders. Selected pills feel raised/filled but not loud;
unselected pills stay legible and keep tap affordance; counts may appear as small nested
pills; long labels truncate cleanly.

Home area selection lives in the bottom area dock/carousel, not as daily/weekly/monthly
tabs. The dock should feel close to a native tab bar: translucent, safe-area aware, compact,
and stable during horizontal scrolling. `All` stays persistently visible; areas in the
carousel are only areas with assigned habits. Frequency labels are small section headers
inside the selected area, not primary navigation.

### Forms & sheets

Creation/editing flows use bottom sheets and compact controls. Bottom sheets open from the
bottom with a dim overlay; surfaces use `surface`/`surfaceElevated`, large top radii,
safe-area bottom padding. Prefer one-column option rows for core settings; use expandable
section pills only when they reduce complexity; icon-led rows for symbol, theme/color,
frequency, reminders, area fields. Primary actions use `accent` with `accentText`; softer
selected controls use `accentSoft`; destructive actions use `error`, lower in hierarchy. Keep
labels short, group related controls, avoid walls of text, keep inputs visible above the
keyboard.

### Add/Edit Habit flow

The flow should be a quiet, sparse setup surface rather than a grid of many visible
configuration buttons.

Main sheet anatomy: header with close/cancel left and save/confirm right when appropriate; a
large habit-name input as the visual focus; one selected icon/color preview near the input
(detailed pickers open separately); four calm rows for primary settings — `Appearance`,
`Schedule`, `Area`, `Reminder`; optional helper text only when it clarifies a decision.
Form rows use `surfaceElevated` on `background`; icon tiles use `surfaceMuted` with the
appropriate `iconGreen`/`iconYellow`/`iconBlue`/`iconPurple`/`iconPink` pastel accent.

Nested sheet anatomy: one purpose per sheet; short Nunito title with a compact Inter label
only when needed; 3–5 primary choices visible at once when possible; segmented controls or
simple rows before dense grids; grids reserved for icon and color selection (generous
spacing, clear selected state); no long multi-setting summaries inside the sheet.

Specific nested sheets:

- `Schedule`: simple daily/weekly/monthly choice first; advanced custom scheduling as its own clearly named control.
- `Appearance`: combine icon and color into one sheet; no tiny inline icon/color pickers on the main form.
- `Area`: plain list of area choices with short labels; custom area creation secondary.
- `Reminder`: one clear time selector, optional day initials only when needed, one enable/disable toggle.
- `Icon`: selected-icon preview plus a tidy grid.
- `Color`: selected-swatch preview plus a tidy accessible swatch grid.

Implementation checklist: reuse theme tokens; keep form logic in hooks; preserve existing
habit creation/editing behavior while changing layout; verify Add Habit, Edit Habit, and each
nested sheet in the simulator in both themes.

### Stats, history & charts

Stats explain behavior visually, not by overwhelming the user. Use heatmap cells and calendar
grids for history, progress rings for current-period summaries, compact percentages with
semantic color tiers, range toggles as segmented controls, and quiet empty states. Protected/
rest periods must be visually distinct from completed periods; missed states understandable
but not punishing; percentages must match `utils/completionStats.ts`.

### Settings

Utilitarian and scannable. Use rows, panels, and clear labels. Reserve cards for discrete
settings groups or subscription content.

## Iconography & imagery

Use Ionicons for app icons and controls — usually outline style for normal actions. Icon-only
controls need accessibility labels and 44x44 touch targets. Use real app assets where
established (e.g. home header images). Use the mascot and matching nature scenery as the
primary illustration language (see Part 4). Do not introduce decorative gradient blobs,
abstract SVG decorations, unrelated stickers, or stock-like imagery.

## Motion & interaction

Motion should be responsive and restrained. Use small press opacity/scale feedback; haptics
for meaningful taps, completions, and selection changes; Reanimated for screen/header/card
motion; short transitions (~180–260ms) for sheets and UI state changes; celebration effects
only when a completion warrants it. Avoid constant ambient animation, large bouncing motion
for area controls, and motion that blocks rapid daily check-in. *(See Part 1 §6 for the
canonical register-level motion direction; the painterly register favors 300–500ms soft-cubic
for emotional moments.)*

## Accessibility

Minimum touch target 44x44; every interactive element has a clear accessibility role/label;
respect light and dark themes; maintain WCAG 2.1 AA contrast; do not rely on color alone for
completion/protected/missed states; use reduced-motion alternatives where animation becomes
substantial; preserve cross-platform behavior. The full WCAG implementation guide (contrast
checker, test suite, standards) lives in `ENGINEERING.md` §11.

## Implementation guardrails

- Use `useThemeStore((state) => state.colors)` for colors.
- Import `spacing`, `typography`, `borderRadius`, `shadows` from `constants/theme.ts`.
- Avoid hardcoded hex/HSL in components, except external brand colors already tokenized.
- Keep styles outside render when possible. One component per file. UI renders; logic in hooks.
- Use repository-backed stores/hooks for data; UI must not talk to SQLite directly.
- Run contrast tests after color changes. Use focused validation during normal iteration.

## Paste-friendly redesign prompt

Use this when asking an external design assistant to redesign a screen:

```text
You are redesigning a screen for a calm local-first routine builder for people overwhelmed by
streak pressure, noisy productivity apps, and feature-heavy habit trackers. Keep the design
consistent with this system:

- Register: painterly and atmospheric — calm, dignified, contemplative, warm. Soft edges,
  atmospheric depth, muted-warm palette, quiet typography. Charming but adult, not childish.
- Visual identity: warm cream surfaces, forest-green text, muted olive selection accents, peach
  everyday CTAs, blue high-stakes-only actions, green success, amber warning, terracotta
  errors, gold completion rewards.
- Mascot direction: a small cozy hedgehog-like forest companion, rendered in a soft
  watercolor register; marketable in short-form video; not on emotional-anchor screens.
- Typography: Nunito for headings/habit names/titles; Inter for body, labels, numbers,
  stats. Compact headings inside cards and sheets.
- Layout: mobile-first React Native/Expo. Safe areas, 16-24px screen padding, 8px spacing
  rhythm, readable density, 44x44 minimum touch targets. Reduce cognitive load.
- Shapes: soft continuous corners. Main surfaces 24-32px radius, inner controls 12-20px,
  pills/FABs fully rounded.
- Components: the Home screen is area-first. A selected area header should be prominent;
  daily/weekly/monthly are compact section headers inside it. Habit cards are tactile warm
  surfaces with a completion ring/button, compact consistency badge, history cells, and
  secondary actions tucked away.
  Forms use bottom sheets, expandable section pills, and icon-led controls. Stats use
  heatmaps, progress rings, range toggles, and quiet empty states.
- Color roles: semantic tokens only. Teal `primary` for subtle selection/links/day-rings.
  Peach `accent` for everyday CTAs. Blue `accentHigh` for account/high-stakes actions only.
  `success`/`warning`/`error` are feedback only. Gold for excellent completion only.
- Accessibility: WCAG AA contrast, dark mode, labels/roles, never color alone.
- Avoid: feature overload, streak-shaming, loud gamification, dense analytics dashboards,
  decorative gradient blobs, stock imagery, unrelated stickers, hardcoded colors, nested
  cards inside cards, oversized hero sections, babyish language, hard drop shadows,
  bright/saturated accents, confetti-style celebration.

Design the requested screen with these rules and describe the layout, hierarchy, components,
colors, typography, mascot usage, states, and interaction behavior.
```

---

# Part 3 — Theme Tokens (code reference)

Implementation reference for the theme tokens. Source of truth: `constants/theme.ts` (token
values) and `store/themeStore.ts` (theme state). Contrast tests:
`utils/__tests__/themeContrast.test.ts`.

## Theme store

Theme state is managed by `store/themeStore.ts`.

- The app supports light and dark color schemes and always follows the system theme.
- Manual light/dark overrides are intentionally disabled so native system chrome (including the tab bar) stays in sync.
- Components subscribe with `useThemeStore((state) => state.colors)`.

## Color tokens

All app UI should use semantic color roles instead of hardcoded values. The surface family
was warmed off pure white onto a parchment-cream canvas to match the onboarding watercolor
paintings and the May 30 area mockups. `skyTop` / `skyBottom` / `haze` atmosphere tokens
carry the same soft painted light into headers and hero areas (see Part 1).

### Light theme

| Token | Value | Role |
| --- | --- | --- |
| `background` | `hsl(39, 58%, 94%)` | Main app background — warm parchment canvas |
| `backgroundSecondary` | `hsl(38, 46%, 92%)` | Muted secondary background |
| `surface` | `hsl(38, 62%, 95%)` | Habit cards, recap cards, warm panels |
| `surfaceElevated` | `hsl(40, 68%, 96%)` | Form rows, sheets, modal internals |
| `surfaceMuted` | `hsl(48, 28%, 84%)` | Icon tiles, nested elements |
| `text` | `hsl(125, 25%, 16%)` | Primary text |
| `textSecondary` | `hsl(112, 15%, 32%)` | Secondary text |
| `textInverse` | `hsl(0, 0%, 100%)` | Text on filled dark/color surfaces |
| `disabled` | `hsl(42, 12%, 55%)` | Disabled controls |
| `primary` | `hsl(96, 25%, 30%)` | Muted forest olive — selection, links, day-rings, progress |
| `accent` | `hsl(15, 48%, 48%)` | Everyday CTA — Save, Create, Confirm, Continue, FAB |
| `accentText` | `#FFFFFF` | Text/icons on filled accent buttons |
| `accentSoft` | `hsl(25, 62%, 91%)` | Selected gentle controls inside create flow |
| `accentHigh` | `hsl(210, 34%, 43%)` | High-stakes only — Subscribe, Restore, Sign Out, Delete |
| `success` | `hsl(93, 24%, 37%)` | Completed/positive feedback |
| `warning` | `hsl(36, 39%, 42%)` | Warning or middling progress |
| `error` | `hsl(14, 45%, 44%)` | Error/destructive feedback |
| `border` | `hsl(38, 32%, 78%)` | Hairline dividers and subtle outlines |
| `overlay` | `hsla(120, 24%, 13%, 0.32)` | Modal/backdrop overlay |
| `gradientStart` | `hsl(92, 24%, 42%)` | Habit/progress gradient start |
| `gradientEnd` | `hsl(37, 46%, 55%)` | Habit/progress gradient end |
| `goldLight` | `hsl(43, 48%, 62%)` | Completion reward gold |
| `goldDark` | `hsl(39, 58%, 36%)` | Completion reward gold depth |
| `skyTop` | `hsl(38, 70%, 80%)` | Painted-sky gradient top — warm peach (headers/hero) |
| `skyBottom` | `hsl(43, 66%, 91%)` | Painted-sky gradient bottom — pale cream (headers/hero) |
| `haze` | `hsla(40, 64%, 86%, 0.55)` | Low-alpha warm wash for atmospheric depth |
| `iconGreen` | `hsl(78, 18%, 52%)` | Schedule/leaf icon tile accent |
| `iconYellow` | `hsl(43, 64%, 67%)` | Area/sun icon tile accent |
| `iconBlue` | `hsl(211, 24%, 58%)` | Water/blue icon tile accent |
| `iconPurple` | `hsl(260, 30%, 69%)` | Reminder/book icon tile accent |
| `iconPink` | `hsl(340, 45%, 65%)` | Heart icon tile accent |

### Dark theme

| Token | Value | Role |
| --- | --- | --- |
| `background` | `hsl(220, 22%, 14%)` | Main app background — moonlit dusk |
| `backgroundSecondary` | `hsl(220, 18%, 22%)` | Muted secondary background |
| `surface` | `hsl(220, 16%, 19%)` | Card/sheet surface |
| `surfaceElevated` | `hsl(220, 14%, 23%)` | Form rows, sheets, modal internals |
| `surfaceMuted` | `hsl(220, 12%, 21%)` | Icon tiles, nested elements |
| `text` | `hsl(40, 35%, 92%)` | Primary text |
| `textSecondary` | `hsl(40, 15%, 70%)` | Secondary text |
| `textInverse` | `hsl(220, 22%, 10%)` | Text on filled light/color surfaces |
| `disabled` | `hsl(0, 0%, 40%)` | Disabled controls |
| `primary` | `hsl(210, 50%, 70%)` | Moonlit blue — selection, links, day-rings, progress |
| `accent` | `#C0786D` | Everyday CTA (lifted for AA on dark backgrounds) |
| `accentText` | `#FFFFFF` | Text/icons on filled accent buttons |
| `accentSoft` | `hsl(15, 22%, 29%)` | Selected gentle controls inside create flow |
| `accentHigh` | `hsl(210, 50%, 60%)` | High-stakes only — Subscribe, Restore, Sign Out, Delete |
| `success` | `hsl(150, 35%, 55%)` | Completed/positive feedback |
| `warning` | `hsl(35, 50%, 60%)` | Warning or middling progress |
| `error` | `hsl(15, 50%, 60%)` | Error/destructive feedback |
| `border` | `hsl(220, 14%, 28%)` | Dividers and subtle outlines |
| `overlay` | `hsla(0, 0%, 0%, 0.6)` | Modal/backdrop overlay |
| `gradientStart` | `hsl(35, 75%, 60%)` | Habit/progress gradient start |
| `gradientEnd` | `hsl(210, 50%, 60%)` | Habit/progress gradient end |
| `goldLight` | `hsl(40, 55%, 70%)` | Completion reward gold |
| `goldDark` | `hsl(40, 55%, 60%)` | Completion reward gold depth |
| `skyTop` | `hsl(25, 50%, 32%)` | Painted-sky gradient top — warm dusk (headers/hero) |
| `skyBottom` | `hsl(220, 22%, 16%)` | Painted-sky gradient bottom — fades to background |
| `haze` | `hsla(220, 18%, 24%, 0.55)` | Low-alpha warm wash for atmospheric depth |
| `iconGreen` | `hsl(100, 24%, 67%)` | Schedule/leaf icon tile accent |
| `iconYellow` | `hsl(40, 70%, 70%)` | Area/sun icon tile accent |
| `iconBlue` | `hsl(205, 55%, 70%)` | Water/blue icon tile accent |
| `iconPurple` | `hsl(260, 40%, 74%)` | Reminder/book icon tile accent |
| `iconPink` | `hsl(340, 58%, 70%)` | Heart icon tile accent |

### Color usage notes

- `skyTop`/`skyBottom`: the painterly sky gradient. Use as a vertical `LinearGradient` behind headers and hero areas. Do not place small body text directly on `skyTop` — overlay an info widget or use a haze wash for legibility.
- `haze`: a low-alpha warm wash. Layer over large surfaces (or behind floating cards) for atmospheric depth instead of a hard border. Stacking haze beats stacking shadows.
- `iconGreen/Yellow/Blue/Purple/Pink`: pastel icon-tile accents in form rows; use with a `surfaceMuted` background.
- Google Sign-In brand colors remain tokenized because they must match external brand requirements.

### Migration notes

Token count was reduced from 47 to 26 in the design-system consolidation pass. Key renames:

| Old token | → | New token |
| --- | --- | --- |
| `habitSetupBackground` | delete | `background` |
| `habitSetupSurface` | delete | `surfaceElevated` |
| `habitSetupSurfaceMuted` | rename | `surfaceMuted` |
| `habitSetupText` | delete | `text` |
| `habitSetupTextSecondary` | delete | `textSecondary` |
| `habitSetupBorder` | delete | `border` |
| `habitSetupIconNeutral` | delete | `textSecondary` |
| `habitSetupGreen/Yellow/Blue/Purple/Pink` | rename | `iconGreen/Yellow/Blue/Purple/Pink` |
| `habitSetupTaupe` | delete | `textSecondary` |
| `accentPeachStrong` | rename | `accent` |
| `accentPeachStrongText` | rename | `accentText` |
| `accentPeachSoft` | rename | `accentSoft` |
| `accentPeach` | delete | `accent` |
| `accentBlue` | rename | `accentHigh` |

The dark-mode `accent` value was lifted from `#9F5548` to `#C0786D` to pass AA contrast on
dark backgrounds when used as a text foreground. Re-run the contrast test after the swap if
you roll this back.

## Typography tokens

| Family token | Font |
| --- | --- |
| `typography.fontFamily.heading` | `Nunito_700Bold` |
| `typography.fontFamily.headingMedium` | `Nunito_600SemiBold` |
| `typography.fontFamily.headingRegular` | `Nunito_400Regular` |
| `typography.fontFamily.display` | `Nunito_400Regular` |
| `typography.fontFamily.displayMedium` | `Nunito_600SemiBold` |
| `typography.fontFamily.displayBold` | `Nunito_700Bold` |
| `typography.fontFamily.displayHero` | `PlayfairDisplayLF_700Bold` |
| `typography.fontFamily.regular` | `Inter_400Regular` |
| `typography.fontFamily.medium` | `Inter_500Medium` |
| `typography.fontFamily.semibold` | `Inter_600SemiBold` |
| `typography.fontFamily.bold` | `Inter_700Bold` |

| Role token | Font | Use |
| --- | --- | --- |
| `typography.roles.screenTitle` | `Nunito_700Bold` | Large screen titles |
| `typography.roles.sheetTitle` | `Nunito_700Bold` | Modal and sheet titles |
| `typography.roles.cardTitle` | `Nunito_700Bold` | Habit names and primary card titles |
| `typography.roles.sectionHeader` | `Inter_600SemiBold` | Compact headers and row titles |
| `typography.roles.metadata` | `Inter_500Medium` | Helper text, dates, row metadata |
| `typography.roles.body` | `Inter_400Regular` | Body copy and explanatory text |
| `typography.roles.chipLabel` | `Inter_600SemiBold` | Chips, badges, short labels |
| `typography.roles.buttonLabel` | `Inter_600SemiBold` | Buttons and action labels |
| `typography.roles.compactStat` | `Inter_700Bold` | Percentages, counts, compact numbers |
| `typography.roles.heroDisplay` | `PlayfairDisplayLF_700Bold` | Rare scenic/hero display type |

| Size token | Value | Use |
| --- | ---: | --- |
| `xs` | 12 | Captions, suffixes, tiny labels |
| `sm` | 14 | Secondary text, legal text, compact labels |
| `base` | 16 | Body text, controls |
| `lg` | 18 | Large body, important control labels |
| `xl` | 20 | Section headings |
| `2xl` | 24 | Screen titles, modal headings |
| `3xl` | 28 | Large modal titles |
| `4xl` | 32 | Rare hero/title moments |

Line-height multipliers: `tight` 1.2, `normal` 1.5, `relaxed` 1.75.

Letter spacing tokens:

| Token | Value | Use |
| --- | ---: | --- |
| `xs` | `0.3` | Tiny labels, counters, compact pills |
| `sm` | `0.16` | Small secondary text and compact labels |
| `base` | `0` | Body text and normal controls |
| `lg` | `-0.1` | Large body or compact title text |
| `xl` | `-0.2` | Section headings |
| `2xl` | `-0.3` | Screen and modal headings |
| `3xl` | `-0.4` | Large titles |
| `4xl` | `-0.6` | Rare large title moments |
| `display` | `-0.8` | Oversized hero/display text |
| `uppercaseXs` | `0.6` | Tiny uppercase labels |

Tracking rule: large text tightens as it scales up; small text opens slightly so it stays
readable.

## Spacing tokens

8px rhythm with small intermediate steps.

| Token | Value |
| --- | ---: |
| `xs` | 4 |
| `sm` | 8 |
| `md` | 12 |
| `lg` | 16 |
| `xl` | 20 |
| `2xl` | 24 |
| `3xl` | 32 |
| `4xl` | 40 |
| `5xl` | 48 |

## Radius tokens

Soft continuous corners. On iOS, pair rounded surfaces with `borderCurve: "continuous"` where
supported.

| Token | Value | Use |
| --- | ---: | --- |
| `sm` | 12 | Small elements, tags, cells |
| `md` | 16 | Medium controls |
| `lg` | 20 | Inner groupings |
| `xl` | 24 | Secondary cards and forms |
| `2xl` | 32 | Major surfaces and header corners |
| `full` | 9999 | Pills, FABs, circles |

## Shadows

`shadows.sm`, `shadows.md`, `shadows.lg` include iOS shadow properties and Android
`elevation`. As of the May 30 area refresh, shadows use **atmospheric falloff, not stamped
drop shadows**: warm-tinted `shadowColor` values around `hsl(30, 28%, 22-26%)`, larger
`shadowRadius` values (10 / 16 / 24), and low `shadowOpacity` (0.04 / 0.06 / 0.08).
Elevation should read as soft depth in a painted scene, never as a crisp UI box. Use
`cardSurface.borderWidth` for card outlines so borders stay hairline and low contrast.
When something needs emphasis, prefer a `haze` wash or a gentle scale over a heavier shadow.

## Component usage pattern

```tsx
import { borderRadius, spacing, typography } from "@/constants/theme";
import { useThemeStore } from "@/store/themeStore";

export function ExampleCard() {
  const colors = useThemeStore((state) => state.colors);

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }]}>Habit</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Daily progress
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    borderCurve: "continuous",
    borderWidth: StyleSheet.hairlineWidth,
    padding: spacing.lg,
  },
  title: {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize.xl,
    lineHeight: typography.fontSize.xl * typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.xl,
  },
  subtitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.sm,
  },
});
```

## Token guardrails

- Do not hardcode colors in components; use theme tokens.
- Do not add new theme tokens without updating this document and the contrast tests.
- Do not use `accentHigh` for decoration, secondary selection, or any habit-creation action — it is reserved for account-level/destructive actions only.
- Do not use `accent` (peach) for selection indicators; use `primary` (muted forest olive) for those.
- Do not use semantic colors outside true feedback states.
- Keep styles outside render unless dynamic values require inline composition.
- Maintain accessibility labels, roles, and 44x44 touch targets.
- Run `yarn test utils/__tests__/themeContrast.test.ts` after color changes.

---

# Part 4 — Mascot Art Direction

Use this part before generating new mascot assets, redesigning mascot-heavy screens, creating
onboarding art, or making TikTok/share-card visuals.

## Strategic role

The mascot exists to make a minimal routine builder feel emotionally safe, memorable, and
marketable without adding clutter. It is not a game character, decoration system, or
replacement for clear UI — it is a gentle companion that helps users feel less judged by
habit tracking.

## Current asset direction

The current mascot is **canonical**. Do not explore alternate species, replacement characters,
or a new illustration identity unless a future brand pass explicitly asks for that.

The current direction reads as a small cozy hedgehog-like forest companion in soft natural
scenes. Preserve this identity and extend it through additional poses, screen placements, and
marketing compositions. New art should only complete missing states or improve consistency.

> **Rendering update (per Part 1):** every mascot image is being re-painted in the soft
> watercolor / gouache register established by the onboarding paintings — loose diffused
> edges, visible paper texture, warm muted palette, no candy-bright saturation. The
> silhouette, proportions, and warmth stay recognizable; only the rendering technique
> changes. The mascot does **not** appear on onboarding emotional-anchor screens.

## Existing asset inventory

Assets live in `assets/{brand,images,mascot,onboarding}/`. All filenames are
lowercase-hyphenated PNG.

**Canonical scene:**

| Asset | Known usage | Notes |
| --- | --- | --- |
| `assets/images/header-bg.png` | `HomeHeader.tsx`, `GoalChallengeHeader.tsx` | **Canonical mascot reference.** All new poses should match this character. |
| `assets/images/header-bg-dark.png` | `HomeHeader.tsx`, `GoalChallengeHeader.tsx` | Dark variant of canonical scene. |
| `assets/images/progress-mountain.png` | `ProgressScreen.tsx` | Progress mountain scene (light). |
| `assets/images/progress-mountain-dark.png` | `ProgressScreen.tsx` | Progress mountain scene (dark). |

**Mascot poses:**

| Asset | Known usage | Notes |
| --- | --- | --- |
| `assets/mascot/planting.png` | `app/sign-in.tsx` | Regenerate to match canonical mascot in `header-bg.png`. |
| `assets/mascot/planting-dark.png` | `app/sign-in.tsx` | Regenerate to match canonical mascot. |
| `assets/images/resting.png` | `HabitRecoveryDaySheet.tsx` | Rest-mode mascot scene (light). |
| `assets/images/resting-dark.png` | `HabitRecoveryDaySheet.tsx` | Rest-mode mascot scene (dark). |

**Brand:**

| Asset | Known usage | Notes |
| --- | --- | --- |
| `assets/brand/icon.png` | — | App icon (rounded, for display use). |
| `assets/brand/icon-square.png` | `app.json` (icon, adaptive-icon, favicon) | App icon (square, for build/store uses). |
| `assets/brand/splash.png` | `app.json` (`expo-splash-screen`) | Full-screen splash image source. |

**The mascot inside `assets/images/header-bg.png` is the canonical character reference.** All
new mascot poses must match its species, proportions, style, and palette. The planting poses
are placeholder copies of older art and should be regenerated before the next marketing or App
Store refresh — drop new PNGs at the same paths, no code changes needed.

## Asset coverage checklist

Already covered: home header scene (light + dark, canonical source); sign-in/onboarding
planting pose (light + dark, needs regeneration); rest/protection scene; existing onboarding
scene images.

Needs new art: completion/happy pose; focused/planning pose for Add/Edit Habit; concerned-but-
kind pose for missed periods; weekly recap/share-card pose; matching dark variants for every
new production pose.

## Mascot personality

Should feel: gentle, cozy, quietly encouraging, a little playful, proud of small progress,
rest-friendly, emotionally safe.

Should never feel: hyperactive, judgmental, sarcastic, babyish, cluttered, loudly gamified, or
like it is demanding performance.

## Visual style

Use: soft rounded proportions; warm natural textures; simple readable silhouette; expressive
face and pose; gentle forest/garden context; cream, green, muted blue, warm gold, and soft earth
tones; low visual contrast inside illustrations so UI remains the focus; enough detail to be
marketable but not noisy at phone size.

Avoid: loud candy colors; excessive pink; excessive hearts, bows, stickers, emoji, or sparkle
clutter; hard-edged vector mascots that clash with the painterly header; highly rendered
realism; multiple competing character species or styles; busy backgrounds behind functional
UI.

## Minimalism rules

The mascot should reduce emotional friction, not increase cognitive load.

- One mascot moment per screen is usually enough.
- Dense utility screens use small mascot accents or none.
- Do not place mascot art in every card, row, or button.
- Do not use mascot art where a simple icon communicates better.
- Do not use mascot expressions as the only way to communicate state.
- UI hierarchy must remain clear without the illustration.

## Core mascot states

A consistent expression/pose set sharing the same proportions, rendering style, lighting, and
silhouette:

| State | Use | Emotional meaning |
| --- | --- | --- |
| Neutral | Home, default helper | "I'm here with you." |
| Happy | Habit completed, positive empty states | "Nice, you did it." |
| Resting | Rest/protection, rest periods | "Rest counts too." |
| Sleepy | Low-energy moments, gentle reminders | "Small steps are enough." |
| Focused | Creating/editing habits, planning | "Let's keep this simple." |
| Celebrating | Day complete, streak, weekly recap | "This is worth noticing." |
| Concerned | Missed period or error state | "It's okay, let's continue." |

## Required asset set

Prioritize a small set before making many variants.

Production app assets: (1) home header scene (light + dark, room for date and progress UI);
(2) mascot head / small badge (transparent, works at 24/32/48/64px); (3) resting/protected
pose; (4) completion pose (satisfying, not loud); (5) empty-state pose (directs attention to
the next action); (6) focused/planning pose; (7) share/recap card pose (more expressive,
still consistent).

Marketing assets: App Store / landing visual pose; TikTok hook background scene; weekly
recap/share card template; transparent mascot cutouts for video editing.

## Screen placement rules

- **Home**: primary mascot home; present in the header scene; never covers habit cards, area filters, or the primary completion action.
- **Add/Edit Habit**: use mascot sparingly; a small focused/planning pose can keep the screen from feeling sterile; the form stays minimal and fast.
- **Stats**: mostly functional; mascot only for empty states, excellent progress, or weekly recap; charts stay calm and readable.
- **Settings**: little or no mascot art; a small brand mark near account/about sections is acceptable.
- **Onboarding / Sign-In**: per Part 1, the mascot does **not** appear on emotional-anchor screens; it may appear on sign-in and lower-stakes onboarding surfaces; keep text short.
- **Paywall**: mascot can make the paywall feel supportive rather than transactional; avoid manipulative or guilt expressions; focus on value.
- **Share Cards / TikTok**: mascot can be larger and more expressive; keep the core palette; avoid noisy stickers.

## Copy voice

Mascot-related copy should be short, calm, and concrete.

Use: "Small step logged." · "Rest protected this one." · "You're still in it." · "Done for
today." · "Let's keep it simple." · "A softer week still counts."

Avoid: "Don't break the streak!" · "You failed." · "No excuses." · "Crush your outcomes." · "Be
unstoppable." · baby talk or excessive exclamation.

## Asset generation prompt template

Area artwork generated during area creation uses `gpt-image-2` with `quality: low`.
The generated size is derived from the shared goal image aspect ratio and rounded to the
nearest 16px height multiple; at the current `1.7` target ratio, this resolves to
`1536x896`. This keeps the generated asset in a taller landscape ratio while staying in the
lower-latency quality tier.

Generated area artwork defaults to Sona's painterly atmospheric style, but user visual intent
wins: if the user asks for a specific subject, setting, mood, color, medium, era, or
composition, generation should preserve that request instead of forcing every image back into
one house look. The review flow may also offer a freeform image direction where the user's
custom prompt is followed without the Sona watercolor default. Generated images still have no
baked text. The generated area name is stored separately on the underlying record and can be
rendered by the app UI where needed. Image prompts must explicitly forbid words, letters,
numbers, signs, labels, captions, logos, UI, typography, handwritten marks, and any baked
area name. Composition can still use quiet negative space when it serves the scene, but it
should not reserve a title area or create a text-safe corner.

Area artwork should feel motivating and inspiring: a vivid glimpse of the life the area helps
the user build, not a generic category banner. Prompts should prefer a specific place, a
lived-in moment, a few concrete anchor objects, clear time-of-day or weather, and one
distinctive visual detail.
Do not force one fixed brand palette across every area image; let the scene choose an
emotionally appropriate palette so generated areas stay visually distinct. Some areas should
feel rugged, focused, dark, bright, energetic, serene, warm, cool, or intense when the user's
intent calls for it.
Avoid generic wellness symbols, empty landscapes, floating icons, stock-like productivity
scenes, and scenes that could fit almost any area. People, pets, hands, silhouettes, and
bodies in motion are allowed when they naturally serve the user's idea, but avoid
portrait-like face closeups unless the user asks for them.

Core interpretation rule: show the evidence of becoming, not the fantasy of having. Translate
the user's area idea into three curated visual takes that imply repeated action is changing
them: one motivating momentum or threshold scene, one quieter ritual scene, and one
place-based, symbolic, or environmental scene. Prefer rituals, tools, preparation,
environment, momentum, and earned signs of progress over literal rewards, obvious fantasies,
or cultural cliches. Labels should feel like small scene titles, not prompt categories. This
translation should happen behind the scenes for normal users, then be exposed on the review
screen as "Sona's visual take" so users can choose another take, nudge the current image with
a compact vibe control, or describe a specific image themselves if the first painting feels
wrong.

Favor action shots or charged threshold moments over quiet still lifes. Area artwork should
often imply motion, direction, scale, arrival, departure, exertion, transformation, or a
decisive next step. Avoid static tabletop compositions, paperwork/admin closeups, generic
empty interiors, scattered supplies, or passive object arrangements unless the user's area
explicitly calls for that kind of scene.

```text
Create a production-ready mascot illustration for a calm minimal routine builder for people
overwhelmed by streak pressure and feature-heavy productivity apps.

Mascot direction: preserve the existing small cozy hedgehog-like forest companion. Keep the
same character identity, soft natural world, proportions, and emotional tone. The asset
should be a new pose or scene for the current mascot, not a replacement.

Visual style: soft watercolor / gouache wash, loose diffused edges, visible paper texture,
warm muted cream and forest-green palette, subtle olive and blue accents, gentle lighting, clean
silhouette, minimal background detail, calm and soothing.

State/pose: [STATE]
Use case: [SCREEN OR ASSET USE]
Composition: [SIZE, TRANSPARENT BACKGROUND OR SCENE, SAFE AREA REQUIREMENTS]
Mood: supportive, quiet, warm, forgiving.

Avoid: alternate mascot species, replacement character concepts, loud candy colors, excessive
pink, bows, sticker clutter, heavy sparkles, babyish expression, harsh outlines, glossy
3D-cartoon shading, high-detail realism, busy backgrounds, multiple characters.
```

When generating screen mockups, append: "Keep minimalism primary. The mascot should support
the emotional tone but not add clutter. The screen must remain usable and clear without
reading any long explanation. Use one mascot moment at most unless this is a share card."

## Implementation notes

- Store production mascot bitmaps under `assets/mascot/` (poses) or `assets/images/` (full scenes with background).
- Prefer transparent PNG/WebP cutouts for reusable mascot poses.
- Provide light/dark variants for every production pose.
- Use lowercase-hyphenated names, e.g. `mascot-focused.png`, `mascot-focused-dark.png`.
- Before replacing existing assets, audit current usage in source and update imports deliberately. New poses following the naming conventions in the inventory table require no import changes — just drop the file in place.
