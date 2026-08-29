const TOOLS = ["Grok Bot", "Claude Cowork", "ChatGPT", "Perplexity"] as const;

const ROWS: { label: string; values: string[] }[] = [
  {
    label: "What it is",
    values: [
      "An agent fleet with a separate computer for each agent",
      "General computer agent",
      "General AI assistant",
      "AI research engine",
    ],
  },
  {
    label: "What starts it",
    values: [
      "A person, routine, or approved signal",
      "You assign a task",
      "You start a chat or task",
      "You ask a question",
    ],
  },
  {
    label: "What you get",
    values: [
      "Artifacts, checks, and handoffs",
      "A completed task or artifact",
      "An answer, analysis, or draft",
      "A sourced research answer",
    ],
  },
];

export function CompareTable() {
  return (
    <section id="compare" className="compare">
      <h2>One fleet, separate computers.</h2>
      <p className="section-lede">
        Each agent can work in its own environment, pass the result to the next
        step, and stop when a person needs to review.
      </p>
      <div className="compare-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">Capability</span>
              </th>
              {TOOLS.map((tool) => (
                <th key={tool} scope="col">
                  {tool}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((value, index) => (
                  <td key={TOOLS[index]}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
