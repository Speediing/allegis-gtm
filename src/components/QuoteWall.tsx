import { QUOTES } from "@/data/quotes";

const FEATURED_SOURCES = [
  "https://x.com/naval/status/2090497355649008059",
  "https://x.com/Austen/status/2087685264617406963",
  "https://x.com/AlexFinn/status/2089505950470459659",
  "https://x.com/lennysan/status/2087241423792087518",
  "https://x.com/GergelyOrosz/status/2090353329771631080",
  "https://x.com/yunta_tsai/status/2087415205756391461",
] as const;

export function QuoteWall() {
  const featuredQuotes = QUOTES.filter((quote) =>
    FEATURED_SOURCES.includes(
      quote.source as (typeof FEATURED_SOURCES)[number],
    ),
  );

  return (
    <section id="testimonials" className="quotes">
      <p className="eyebrow">What people say about Grok Bot</p>
      <h2>Real reactions from people using persistent agents.</h2>
      <p className="section-lede">
        These public quotes are shown exactly as written. Each one links to the
        original post.
      </p>
      <div className="quote-thread">
        {featuredQuotes.map((quote) => (
          <article
            key={`${quote.handle}-${quote.date}-${quote.source}`}
            className="quote-row"
          >
            <div className="quote-who">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={quote.avatar}
                alt=""
                width={36}
                height={36}
                className="quote-avatar"
              />
              <div>
                <p className="quote-name">{quote.name}</p>
                <p className="quote-handle">{quote.handle}</p>
              </div>
            </div>
            <blockquote className="quote-bubble">{quote.quote}</blockquote>
            <a
              href={quote.source}
              target="_blank"
              rel="noopener noreferrer"
              className="quote-source"
            >
              Read source →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
