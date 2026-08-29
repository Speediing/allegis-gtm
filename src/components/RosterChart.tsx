import { FLEET, type FleetBot } from "@/data/fleet";

function AgentComputer({ color }: { color: string }) {
  return (
    <span className="org-computer" style={{ color }} aria-hidden>
      <svg viewBox="0 0 52 38">
        <rect x="6" y="3" width="40" height="27" rx="3" />
        <path d="M2 33h48l-3 3H5z" />
        <path d="M12 10h14M12 15h24M12 20h18" />
      </svg>
      <i />
    </span>
  );
}

function Box({
  bot,
  chief = false,
}: {
  bot: FleetBot;
  chief?: boolean;
}) {
  const className = chief ? "org-box is-chief" : "org-box";
  const body = (
    <>
      {bot.seat ? (
        <span className="org-avatar" style={{ background: bot.color }} aria-hidden>
          {bot.mark}
        </span>
      ) : (
        <AgentComputer color={bot.color} />
      )}
      <span className="org-name">{bot.name}</span>
      <span className="org-blurb">{bot.blurb}</span>
    </>
  );

  if (bot.jobId) {
    return (
      <a className={className} href={`#${bot.jobId}`}>
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
}

export function RosterChart() {
  const seat = FLEET.find((item) => item.seat);
  const agents = FLEET.filter((item) => !item.seat);

  if (!seat) return null;

  return (
    <section id="roster" className="roster">
      <p className="eyebrow">The fleet</p>
      <h2>A small fleet, each on its own computer.</h2>
      <p className="section-lede">
        Your team gives each agent a clear part of the work. The agents open
        their own computers, pass work between them, and stop for approval.
      </p>

      <div className="org" role="tree">
        <div className="org-top">
          <Box bot={seat} chief />
        </div>
        <div className="org-branch">
          <div className="org-connect" aria-hidden>
            <i className="org-stem" />
            <i className="org-bar" />
          </div>
          <ul className="org-kids">
            {agents.map((agent) => (
              <li key={agent.id} className="org-kid">
                <Box bot={agent} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
