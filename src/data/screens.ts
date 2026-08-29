import type { JobId } from "./types";

export type SiteKind =
  | "notes"
  | "docs"
  | "mail"
  | "repo"
  | "tests"
  | "page";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  tabs: ChromeTab[];
};

const notes = { id: "notes", host: "notes.workspace", label: "Notes" };
const docs = { id: "docs", host: "docs.workspace", label: "Docs" };
const mail = { id: "mail", host: "mail.workspace", label: "Mail" };
const repo = { id: "repo", host: "code.workspace", label: "Repository" };
const tests = { id: "tests", host: "checks.workspace", label: "Checks" };
const page = { id: "page", host: "preview.workspace", label: "Preview" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening approved sources",
      host: notes.host,
      path: "/working-session",
      title: "Working session notes",
      site: "notes",
      tabs: [notes, docs, mail],
    },
    m2: {
      pill: "Checking the source trail",
      host: notes.host,
      path: "/working-session/sources",
      title: "Source review",
      site: "notes",
      tabs: [notes, docs, mail],
    },
    m3: {
      pill: "Building the working brief",
      host: docs.host,
      path: "/allegis-working-brief",
      title: "Allegis Group working brief",
      site: "docs",
      tabs: [notes, docs, mail],
    },
    m4: {
      pill: "Preparing the meeting handoff",
      host: docs.host,
      path: "/allegis-meeting-handoff",
      title: "Meeting handoff",
      site: "docs",
      tabs: [notes, docs, mail],
    },
    m5: {
      pill: "Draft parked for approval",
      host: mail.host,
      path: "/drafts",
      title: "Drafts",
      site: "mail",
      tabs: [notes, docs, mail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening the change request",
      host: repo.host,
      path: "/shared-service",
      title: "Shared service",
      site: "repo",
      tabs: [repo, tests, docs],
    },
    m2: {
      pill: "Mapping dependent paths",
      host: repo.host,
      path: "/shared-service/map",
      title: "Change map",
      site: "repo",
      tabs: [repo, tests, docs],
    },
    m3: {
      pill: "Running focused checks",
      host: tests.host,
      path: "/runs/focused",
      title: "Focused checks",
      site: "tests",
      tabs: [repo, tests, docs],
    },
    m4: {
      pill: "Writing the change plan",
      host: docs.host,
      path: "/shared-change-plan",
      title: "Shared change plan",
      site: "docs",
      tabs: [repo, tests, docs],
    },
    m5: {
      pill: "Plan ready for review",
      host: tests.host,
      path: "/runs/focused",
      title: "Checks complete",
      site: "tests",
      tabs: [repo, tests, docs],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Reading the approved workflow",
      host: docs.host,
      path: "/approved-workflow",
      title: "Approved workflow",
      site: "docs",
      tabs: [docs, tests, page],
    },
    m2: {
      pill: "Separating reusable steps",
      host: docs.host,
      path: "/reusable-steps",
      title: "Reusable steps",
      site: "docs",
      tabs: [docs, tests, page],
    },
    m3: {
      pill: "Marking control decisions",
      host: tests.host,
      path: "/control-review",
      title: "Control review",
      site: "tests",
      tabs: [docs, tests, page],
    },
    m4: {
      pill: "Building the client starter",
      host: page.host,
      path: "/client-starter",
      title: "Client starter",
      site: "page",
      tabs: [docs, tests, page],
    },
    m5: {
      pill: "Starter ready for review",
      host: page.host,
      path: "/client-starter",
      title: "Client starter",
      site: "page",
      tabs: [docs, tests, page],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
