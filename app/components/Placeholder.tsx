import Image from "next/image";

/**
 * Labeled image placeholder. Stands in for a real Sona screenshot that
 * will be dropped in later. The `label` names the exact screen/state to
 * capture, so the slot is self-documenting. Swap each <Placeholder /> for a
 * next/image <Image /> when the real asset lands in /public.
 */
export function Placeholder({
  label,
  ratio,
  shape = "phone",
  className = "",
  badge = "screenshot",
  ariaPrefix = "Placeholder for",
}: {
  /** what screen/state belongs here, e.g. "Spaces gallery · dark" */
  label: string;
  /** CSS aspect-ratio, e.g. "1170 / 2532" */
  ratio: string;
  /** phone = rounded device frame, card = cropped detail */
  shape?: "phone" | "card";
  className?: string;
  badge?: string;
  ariaPrefix?: string;
}) {
  return (
    <div
      className={`ph ph-${shape} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${ariaPrefix} ${label}`}
    >
      <div className="ph-grid" aria-hidden="true" />
      <span className="ph-badge" aria-hidden="true">
        {badge}
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
 * A single painted-space tile for the gallery marquee.
 *
 * `variant` FORCES the look to light or dark regardless of the page theme: the
 * gallery shows light paintings in the top row and dark ones in the bottom row
 * so every visitor sees both palettes. The painting is loaded from
 * /public/spaces/<slug>-<variant>.webp. A placeholder grid sits behind it, so
 * until the real images are dropped in (or if one is missing) the tile still
 * renders cleanly. The space name is overlaid on the painting.
 */
export function SpaceTile({
  name,
  slug,
  variant,
  ariaLabel,
  alt,
}: {
  name: string;
  slug: string;
  variant: "light" | "dark";
  ariaLabel: string;
  alt: string;
}) {
  return (
    <figure
      className={`space-tile space-tile-${variant}`}
      aria-label={ariaLabel}
    >
      <div className="space-tile-art">
        {/* placeholder behind the image: shows if the painting isn't there yet */}
        <div className="ph-grid" aria-hidden="true" />
        <Image
          src={`/spaces/${slug}-${variant}.webp`}
          alt={alt}
          fill
          sizes="(max-width: 640px) 70vw, 300px"
          className="space-tile-img"
        />
        <span className="space-tile-art-name" aria-hidden="true">
          {name}
        </span>
      </div>
    </figure>
  );
}

/** The "describe your own" tile — drives home that spaces are custom, not presets. */
export function SpaceTileCustom({
  variant,
  label,
  ariaLabel,
}: {
  variant: "light" | "dark";
  label: string;
  ariaLabel: string;
}) {
  return (
    <figure
      className={`space-tile space-tile-${variant} space-tile-custom`}
      aria-label={ariaLabel}
    >
      <div className="space-tile-art space-tile-art-custom">
        <span className="space-tile-spark" aria-hidden="true">
          ✨
        </span>
        <span className="space-tile-custom-label">{label}</span>
      </div>
    </figure>
  );
}
