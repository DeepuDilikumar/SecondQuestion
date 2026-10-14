import type { CompanyLogo } from "./company-logos";

/** One company logo in its brand colour, drawn at `height` px with its own aspect ratio. */
export function CompanyLogoMark({
  logo,
  height,
  className = "",
}: {
  logo: CompanyLogo;
  height: number;
  /** Extra classes, e.g. a smaller CSS height on phones (the width follows the aspect ratio). */
  className?: string;
}) {
  const [, , w, h] = logo.viewBox.split(" ").map(Number);
  return (
    <svg
      viewBox={logo.viewBox}
      width={Math.round((height * w) / h)}
      height={height}
      role="img"
      aria-label={logo.name}
      className={`shrink-0 ${className}`}
    >
      <title>{logo.name}</title>
      {logo.parts ? (
        logo.parts.map((part) => <path key={part.fill} fill={part.fill} d={part.d} />)
      ) : (
        <path fill={logo.color} d={logo.path} />
      )}
    </svg>
  );
}
