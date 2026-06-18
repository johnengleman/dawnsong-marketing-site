/**
 * Labeled image placeholder. Stands in for a real Daybreak screenshot that
 * will be dropped in later. The `label` names the exact screen/state to
 * capture, so the slot is self-documenting. Swap each <Placeholder /> for a
 * next/image <Image /> when the real asset lands in /public.
 */
export function Placeholder({
  label,
  ratio,
  shape = "phone",
  className = "",
}: {
  /** what screen/state belongs here, e.g. "Spaces gallery · dark" */
  label: string;
  /** CSS aspect-ratio, e.g. "1170 / 2532" */
  ratio: string;
  /** phone = rounded device frame, card = cropped detail */
  shape?: "phone" | "card";
  className?: string;
}) {
  return (
    <div
      className={`ph ph-${shape} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder for ${label}`}
    >
      <div className="ph-grid" aria-hidden="true" />
      <span className="ph-badge" aria-hidden="true">
        screenshot
      </span>
      <span className="ph-label" aria-hidden="true">
        {label}
      </span>
      <span className="ph-ratio" aria-hidden="true">
        {ratio.replace(/\s/g, "")}
      </span>
    </div>
  );
}

/**
 * A single painted-space tile for the gallery marquee. Stands in for an
 * AI-painted scene with the space name overlaid.
 *
 * `variant` FORCES the tile's look to light or dark regardless of the page
 * theme — the gallery deliberately shows light paintings in the top row and
 * dark paintings in the bottom row so every visitor sees both. Swap the inner
 * gradient for a real painting <Image fill /> when assets land (use the
 * matching light/dark capture for the variant); the name overlay stays.
 */
export function SpaceTile({
  name,
  variant,
}: {
  name: string;
  variant: "light" | "dark";
}) {
  return (
    <figure
      className={`space-tile space-tile-${variant}`}
      aria-label={`Painted space: ${name} (${variant})`}
    >
      <div className="space-tile-art" aria-hidden="true">
        <div className="ph-grid" />
        <span className="space-tile-badge">{variant} painting</span>
      </div>
      <figcaption className="space-tile-name">{name}</figcaption>
    </figure>
  );
}

/** The "describe your own" tile — drives home that spaces are custom, not presets. */
export function SpaceTileCustom({
  variant,
}: {
  variant: "light" | "dark";
}) {
  return (
    <figure
      className={`space-tile space-tile-${variant} space-tile-custom`}
      aria-label="Describe your own space"
    >
      <div className="space-tile-art space-tile-art-custom" aria-hidden="true">
        <span className="space-tile-spark">✨</span>
      </div>
      <figcaption className="space-tile-name">Describe your own…</figcaption>
    </figure>
  );
}
