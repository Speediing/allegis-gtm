import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide">
        <header className="heard-bar">
          <span>Produced artifact</span>
          <span>Draft, not sent</span>
        </header>
        <div className={`deck-slides size-${size}`}>
          {slides.map((slide) => (
            <section
              key={slide.n}
              className={`deck-tile voice-${slide.voice || "us"}`}
            >
              <div className="deck-tile-bar">
                <p className="deck-kicker">{slide.kicker}</p>
                <span className="deck-n">{String(slide.n).padStart(2, "0")}</span>
              </div>
              <h3 className="deck-tile-title">{slide.title}</h3>
              <p className="deck-map">{slide.body}</p>
              <footer className="deck-tile-foot">
                <span>Allegis Group</span>
                <span>SpaceXAI</span>
              </footer>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
