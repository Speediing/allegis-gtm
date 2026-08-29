import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/allegis-watercolor.svg"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <div>
              <p className="eyebrow">A working idea for Allegis Group</p>
              <h1>The agents that work while your teams deliver.</h1>
              <p className="hero-intro">
                Each agent works from its own computer. It can read the brief,
                use the tools, and return a draft for review. Your team stays
                in control.
              </p>
            </div>
          </section>

          <RosterChart />

          <section className="usecase-framing">
            <p className="eyebrow">Three examples for Allegis Group</p>
            <h2>
              Start with work the team already understands, then judge the
              artifact at the end.
            </h2>
            <p>
              The team sets the goal and the review gate. The fleet handles the
              background work.
            </p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/allegis-watercolor.svg" alt="" />
      </div>

      <div className="report">
        <CompareTable />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Cursor for Allegis Group</p>
          <p>SpaceXAI agent fleet</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Mike Mooney</strong>
          <a href="mailto:michael.mooney@cursor.com">
            michael.mooney@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
