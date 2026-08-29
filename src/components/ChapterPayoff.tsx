import type { StoryBeat } from "@/data/types";
import { ArtifactCard } from "./ArtifactCard";
import { HeardSlide } from "./HeardSlide";

export function ChapterPayoff({
  beat,
  wash,
  value,
}: {
  beat: StoryBeat;
  wash?: string;
  value?: string;
}) {
  const slides = beat.slides;
  const artifact = beat.artifact;

  if (!slides?.length && !artifact) {
    return null;
  }

  return (
    <div className="chapter-payoff">
      <p className="payoff-label">
        {beat.when ? <span>{beat.when}</span> : null}
        {beat.label}
      </p>
      {wash ? (
        <div className="leave-wash" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wash} alt="" />
        </div>
      ) : null}
      {slides?.length ? (
        <HeardSlide slides={slides} size="lg" />
      ) : artifact ? (
        <div className="leave leave-final-artifact">
          <ArtifactCard artifact={artifact} />
        </div>
      ) : null}
      {value ? <p className="leave-value">{value}</p> : null}
    </div>
  );
}
