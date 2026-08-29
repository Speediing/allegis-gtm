import type { CroJob, SlideCard } from "./types";

export const MEETING_BRIEF_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "Starting point",
    voice: "them",
    title: "One workflow",
    body: "Pick work the team already understands and can judge.",
  },
  {
    n: 2,
    kicker: "Agent work",
    voice: "us",
    title: "A small fleet",
    body: "Give research, building, and review to separate computers.",
  },
  {
    n: 3,
    kicker: "Control",
    voice: "them",
    title: "A clear review gate",
    body: "Name the person who approves the artifact before it moves.",
  },
  {
    n: 4,
    kicker: "Decision",
    voice: "us",
    title: "Package it or stop",
    body: "Use the artifact to decide whether the workflow is worth carrying forward.",
  },
];

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Turn a meeting into the next working draft",
    trigger: "A working session ends",
    backgroundAction: "Reading approved notes and opening source material",
    problem:
      "The useful points from a meeting often sit in separate notes, links, and follow-ups.",
    botJob:
      "Scout opens the approved sources. Draft prepares the brief. A person reviews every customer claim.",
    storyboard: [
      {
        when: "Session ends",
        label: "The agent opens the approved notes without waiting for a new prompt.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Client working session",
          people: [
            { initials: "AG", name: "Allegis" },
            { initials: "CL", name: "Client" },
            { initials: "TE", name: "Tech" },
          ],
        },
      },
      {
        when: "Sources checked",
        label: "Customer facts and open ideas go into separate sections.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Approved notes", answer: "Working points" },
            { name: "Account brief", answer: "Owners and next step" },
            { name: "Public sources", answer: "Customer facts" },
          ],
          status: "Inputs separated",
        },
      },
      {
        when: "Draft reviewed",
        label: "A second agent checks the language and the source trail.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "Proposal, not a claim",
          headline: "One workflow to judge",
          product: "Owner, review gate, and artifact",
          status: "Draft checked",
        },
      },
      {
        when: "Artifact ready",
        label: "The final frame is the working brief the team can use.",
        scene: "deck",
        slides: MEETING_BRIEF_SLIDES,
      },
    ],
    unlock:
      "The team leaves with a draft it can inspect, edit, and use in the next conversation.",
    outcome:
      "Approved notes become a clear working brief while the conversation is still fresh.",
    clips: [],
    demo: {
      title: "Brief room",
      subtitle: "Approved notes to a working artifact",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "scout",
          name: "Scout",
          role: "bot",
          persona: "Opens approved notes and checks the source trail",
          color: "#0494D2",
        },
        {
          id: "draft",
          name: "Draft",
          role: "bot",
          persona: "Builds the brief and keeps proposals separate from facts",
          color: "#154270",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "scout",
          kind: "routine",
          body: "The working session ended. I am opening the approved notes, the account brief, and the public sources.",
        },
        {
          id: "m2",
          from: "scout",
          kind: "text",
          body: "The working points are separated from customer facts. I marked every open idea as a proposal.",
        },
        {
          id: "m3",
          from: "draft",
          kind: "draft",
          draftLabel: "Working brief",
          artifact: {
            kind: "slides",
            title: "One workflow to judge",
            cards: MEETING_BRIEF_SLIDES,
          },
        },
        {
          id: "m4",
          from: "draft",
          kind: "draft",
          draftLabel: "Meeting handoff",
          artifact: {
            kind: "one-pager",
            title: "Allegis Group working session",
            eyebrow: "Draft for review",
            sections: [
              {
                heading: "Starting point",
                body: "Choose one delivery workflow with a clear owner.",
              },
              {
                heading: "Working session",
                body: "Build the smallest artifact the team can judge.",
              },
              {
                heading: "Decision",
                body: "Package the workflow or stop after review.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "draft",
          kind: "system",
          body: "Nothing sent. The brief is waiting for your approval.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Trace a shared change before it ships",
    trigger: "A change request reaches the team",
    backgroundAction: "Opening the repo, runbook, and focused checks",
    problem:
      "A shared change can touch more than the file named in the request. The team needs the affected path before it edits.",
    botJob:
      "Patch maps the entry point and dependent paths. Proof runs the focused checks and leaves the final approval with the integration owner.",
    storyboard: [
      {
        when: "Request arrives",
        label: "Patch opens the request on its own computer.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Shared service",
          sources: ["Repository", "Runbook", "Test suite"],
          signal: "Change request opened",
        },
      },
      {
        when: "Path mapped",
        label: "The computer shows the affected paths and the existing check.",
        scene: "map",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Entry point", answer: "Mapped" },
            { name: "Dependent paths", answer: "Mapped" },
            { name: "Focused test", answer: "Found" },
          ],
          status: "Change path ready",
        },
      },
      {
        when: "Checks run",
        label: "Proof runs the focused checks and marks the review that still needs a person.",
        scene: "notes",
        visual: {
          kind: "reply-ready",
          to: "Integration owner",
          subject: "Review the shared change plan",
          status: "One approval open",
        },
      },
      {
        when: "Artifact ready",
        label: "The final frame is the change plan, ready for review.",
        scene: "send",
        artifact: {
          kind: "one-pager",
          title: "Shared change plan",
          eyebrow: "Produced artifact",
          sections: [
            {
              heading: "Scope",
              body: "Entry point, dependent paths, and the reason each path changes.",
            },
            {
              heading: "Proof",
              body: "Focused tests and type checks attached to the plan.",
            },
            {
              heading: "Human gate",
              body: "Integration owner approval before implementation.",
            },
          ],
        },
      },
    ],
    unlock:
      "The team gets a change plan with the open human review at the top.",
    outcome:
      "The agent traces the change and returns a plan the team can review before anyone edits.",
    clips: [],
    demo: {
      title: "Change room",
      subtitle: "Request to a reviewable plan",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "patch",
          name: "Patch",
          role: "bot",
          persona: "Maps shared code paths before suggesting an edit",
          color: "#154270",
        },
        {
          id: "proof",
          name: "Proof",
          role: "bot",
          persona: "Runs checks and marks the human approval",
          color: "#005796",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "patch",
          kind: "routine",
          body: "A change request arrived. I am opening the repository, runbook, and focused tests.",
        },
        {
          id: "m2",
          from: "patch",
          kind: "text",
          body: "I found the shared entry point and the dependent paths. I have not edited anything.",
        },
        {
          id: "m3",
          from: "proof",
          kind: "draft",
          draftLabel: "Change map",
          artifact: {
            kind: "packet",
            title: "Shared path",
            fields: [
              { label: "Entry point", value: "Mapped" },
              { label: "Dependent paths", value: "Mapped" },
              { label: "Focused checks", value: "Passing" },
              { label: "Integration review", value: "Needs an owner" },
            ],
          },
        },
        {
          id: "m4",
          from: "proof",
          kind: "draft",
          draftLabel: "Change plan",
          artifact: {
            kind: "one-pager",
            title: "Shared change plan",
            sections: [
              {
                heading: "Change",
                body: "Update the shared entry point and both dependent paths together.",
              },
              {
                heading: "Checks",
                body: "Run the focused test and type check before review.",
              },
              {
                heading: "Approval",
                body: "Stop for the integration owner before implementation.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "proof",
          kind: "system",
          body: "The plan is ready. No edit was made.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Package a proven workflow for client delivery",
    trigger: "An internal workflow is approved for reuse",
    backgroundAction: "Separating the reusable pattern from internal context",
    problem:
      "A useful internal workflow still needs setup notes, control decisions, and an operator handoff before a client team can judge it.",
    botJob:
      "Scout pulls out the reusable pattern. Proof marks the control decisions. Guide prepares the client starter and handoff.",
    storyboard: [
      {
        when: "Pattern selected",
        label: "The team chooses one workflow it already understands.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Approved workflow",
          sources: ["Setup", "Control notes", "Operator handoff"],
          signal: "Reusable pattern selected",
        },
      },
      {
        when: "Fleet working",
        label: "Separate computers prepare setup, controls, and the handoff.",
        scene: "map",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Scout", answer: "Setup path" },
            { name: "Proof", answer: "Control notes" },
            { name: "Guide", answer: "Operator handoff" },
          ],
          status: "Three computers active",
        },
      },
      {
        when: "Controls reviewed",
        label: "The package stops for the access and data decisions.",
        scene: "notes",
        visual: {
          kind: "outreach-ready",
          person: "Delivery owner",
          channels: ["Setup", "Controls", "Handoff"],
          status: "Approval needed",
        },
      },
      {
        when: "Artifact ready",
        label: "The final frame is the client starter the delivery team can review.",
        scene: "send",
        artifact: {
          kind: "packet",
          title: "Client agent starter",
          fields: [
            { label: "Setup", value: "Environment, trigger, and test path" },
            { label: "Controls", value: "Access and data decisions" },
            { label: "Handoff", value: "Operator guide and review list" },
          ],
        },
      },
    ],
    unlock:
      "A working internal pattern becomes a client starter with the open controls visible.",
    outcome:
      "The fleet packages setup, controls, and a handoff without carrying private context into the client environment.",
    clips: [],
    demo: {
      title: "Starter room",
      subtitle: "Approved workflow to a client package",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "scout",
          name: "Scout",
          role: "bot",
          persona: "Separates reusable steps from internal context",
          color: "#0494D2",
        },
        {
          id: "proof",
          name: "Proof",
          role: "bot",
          persona: "Marks access and data decisions for review",
          color: "#005796",
        },
        {
          id: "guide",
          name: "Guide",
          role: "bot",
          persona: "Builds the operator handoff",
          color: "#FCB417",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "scout",
          kind: "routine",
          body: "The workflow is approved for reuse. I am separating the reusable steps from internal context.",
        },
        {
          id: "m2",
          from: "scout",
          kind: "text",
          body: "The setup path is ready. Private notes are excluded.",
        },
        {
          id: "m3",
          from: "proof",
          kind: "draft",
          draftLabel: "Control review",
          artifact: {
            kind: "packet",
            title: "Open control decisions",
            fields: [
              { label: "Client access", value: "Decision needed" },
              { label: "Data boundary", value: "Decision needed" },
              { label: "Human review", value: "Owner needed" },
            ],
          },
        },
        {
          id: "m4",
          from: "guide",
          kind: "draft",
          draftLabel: "Client starter",
          artifact: {
            kind: "one-pager",
            title: "Client agent starter",
            sections: [
              {
                heading: "Setup",
                body: "Environment, trigger, and a small test path.",
              },
              {
                heading: "Controls",
                body: "Access, data boundary, and the human review gate.",
              },
              {
                heading: "Handoff",
                body: "Operator guide, review list, and open decisions.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "guide",
          kind: "system",
          body: "The starter is ready for review. Nothing was deployed.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
