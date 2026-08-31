export type HeroJobIcon =
  | "brief"
  | "change-map"
  | "controls"
  | "starter"
  | "research"
  | "handoff"
  | "quality"
  | "coordinator";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  workspace: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Working Brief",
    icon: "brief",
    workspace: "Client working session",
    signal: "Approved notes are ready",
    work:
      "I separated confirmed points from open ideas and built the next brief from the approved source set.",
    result: "Working brief ready for review",
    user: "show me what still needs a source",
    bot: "marked. those points will stay out of the final draft.",
  },
  {
    name: "Change Map",
    icon: "change-map",
    workspace: "Shared service",
    signal: "Change request opened",
    work:
      "I traced the entry point, the connected paths, and the focused check before suggesting an edit.",
    result: "Change plan ready for review",
    user: "keep the integration review at the top",
    bot: "done. no edit will start before that approval.",
  },
  {
    name: "Control Review",
    icon: "controls",
    workspace: "Proposed agent workflow",
    signal: "Control check requested",
    work:
      "I listed the access, data, and human review decisions that need an owner before the workflow moves.",
    result: "Control decisions ready",
    user: "leave every open decision visible",
    bot: "done. nothing has been filled in for the team.",
  },
  {
    name: "Client Starter",
    icon: "starter",
    workspace: "Approved internal workflow",
    signal: "Reuse approved",
    work:
      "I removed internal context and packaged the setup, control gates, and operator handoff.",
    result: "Client starter ready for review",
    user: "show me the data boundary first",
    bot: "moved to the top. the package is still a draft.",
  },
  {
    name: "Source Research",
    icon: "research",
    workspace: "Proposed client workflow",
    signal: "Research request approved",
    work:
      "I checked the approved public sources, linked each finding, and kept assumptions out of the summary.",
    result: "Sourced research pack ready",
    user: "remove anything without a direct source",
    bot: "done. the open questions are in a separate list.",
  },
  {
    name: "Delivery Handoff",
    icon: "handoff",
    workspace: "Completed workflow",
    signal: "Operator handoff requested",
    work:
      "I gathered the setup steps, review points, and open decisions into one handoff for the next owner.",
    result: "Operator handoff ready",
    user: "make the first action clear",
    bot: "updated. the owner and first check are at the top.",
  },
  {
    name: "Workflow QA",
    icon: "quality",
    workspace: "Draft client package",
    signal: "Review gate reached",
    work:
      "I checked the package for unsupported claims, missing controls, and unclear approval steps.",
    result: "QA list ready for the owner",
    user: "hold the package until every gate has an owner",
    bot: "holding. the open owners are marked.",
  },
  {
    name: "Fleet Coordinator",
    icon: "coordinator",
    workspace: "Allegis Group working session",
    signal: "Three agent tasks completed",
    work:
      "I collected the brief, control review, and handoff, then prepared the decisions that need a person.",
    result: "Working session pack ready",
    user: "bring me only the decisions",
    bot: "ready. the supporting work stays attached.",
  },
];
