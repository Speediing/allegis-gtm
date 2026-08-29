import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "team",
    name: "Allegis team",
    blurb: "Sets the goal, reviews the result, and approves what moves.",
    color: "#A4D6F3",
    mark: "AG",
    seat: true,
  },
  {
    id: "scout",
    name: "Scout",
    blurb: "Computer 01. Reads approved notes and source material.",
    jobId: "standardize-room",
    color: "#0494D2",
  },
  {
    id: "patch",
    name: "Patch",
    blurb: "Computer 02. Traces a change through the working environment.",
    jobId: "legal-redlines",
    color: "#154270",
  },
  {
    id: "proof",
    name: "Proof",
    blurb: "Computer 03. Checks claims, tests, and control gates.",
    jobId: "legal-redlines",
    color: "#005796",
  },
  {
    id: "guide",
    name: "Guide",
    blurb: "Computer 04. Packages the artifact and the handoff.",
    jobId: "attach-engine",
    color: "#FCB417",
  },
];
