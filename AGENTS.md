# Daybreak marketing site — working notes

This is the marketing site for **Daybreak**, a habit app (Next.js 16, React 19, deployed on **Vercel** — not Cloudflare; the old CF config was removed). The app source lives at `../app` inside the Daybreak workspace.

## Writing & copy workflow (required)

**Run the `/humanizer` skill on any prose I write or edit before considering it done** — articles in `content/articles/*.mdx` and landing/page copy in `app/`. This strips AI-writing tells (AI vocabulary, -ing padding, copula avoidance, filler, signpost tropes, em/en dashes, curly quotes, etc.).

Apply it with judgment, not blindly:
- **Articles / thought-leadership**: full humanize pass. A confident, opinionated voice is correct here.
- **Landing-page marketing copy**: targeted pass only. The brand voice *intentionally* uses some patterns the skill flags as "AI tells" — short punchy lines, "no X, no Y" parallelism, rule-of-three cadence (e.g. "The only habit app as beautiful as your goals", "A missed day is a dip, not a reset", "One space. A few small promises. A painting worth returning to"). These are deliberate and effective; **do not flatten them.** Only fix genuine tics (em dashes, curly quotes, filler, AI vocabulary) while preserving the crafted rhythm.

## Hazard: never bulk find-replace em dashes

When removing em dashes, **recast each clause** — don't just delete the dash. A dash often joins two clauses, and deleting it alone leaves a broken run-on ("behavior the kind where…"). Re-read every edited sentence. (Running `/humanizer` afterward catches these.)

## Style facts

- App name is **Daybreak** (one word). Never "Sona" or "Dawn Song" (legacy names).
- The site uses straight quotes and no em/en dashes in visible copy.
- Brand: warm cream/gold/forest-green with an icon-matched blue accent; calm, forgiving, anti-streak.
