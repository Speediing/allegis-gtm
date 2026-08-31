export function BrandLockup({
  size = "md",
  invert = false,
}: {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}) {
  return (
    <div
      className={`brand-lockup brand-lockup-${size}${invert ? " is-invert" : ""}`}
    >
      <a
        className="brand-allegis"
        href="https://www.allegisgroup.com/en"
        target="_blank"
        rel="noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/allegis-group-wordmark.png"
          alt="Allegis Group"
          className="brand-allegis-image"
        />
      </a>
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/spacexai.svg" alt="SpaceXAI" className="brand-sxai" />
    </div>
  );
}
