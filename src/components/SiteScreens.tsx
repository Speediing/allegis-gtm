import type { DemoMessage } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { ArtifactCard } from "./ArtifactCard";

export function SiteScreen({
  beat,
  message,
  account,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  switch (beat.site) {
    case "notes":
      return <NotesScreen account={account} />;
    case "repo":
      return <RepoScreen />;
    case "tests":
      return <ChecksScreen />;
    case "mail":
      return <MailScreen artifact={artifact} />;
    case "docs":
      return <DocumentScreen artifact={artifact} />;
    case "page":
      return <PreviewScreen artifact={artifact} />;
    default: {
      const exhaustiveSite: never = beat.site;
      return exhaustiveSite;
    }
  }
}

function NotesScreen({ account }: { account: string }) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Notes</strong>
        <span>{account} working session</span>
      </header>
      <article>
        <p>
          <b>Approved points.</b> Work the team agreed can move into the draft.
        </p>
        <p>
          <b>Customer facts.</b> Claims with a public or approved source.
        </p>
        <p>
          <b>Open ideas.</b> Proposals that still need a person to review.
        </p>
      </article>
    </div>
  );
}

function RepoScreen() {
  return (
    <div className="site site-research">
      <header>
        <strong>Shared service</strong>
        <span>Change map</span>
      </header>
      <p className="site-time">Reading before editing</p>
      <ul>
        <li>
          <span>Entry</span> Shared request path
        </li>
        <li>
          <span>Depends on</span> Two connected modules
        </li>
        <li>
          <span>Covered by</span> One focused test
        </li>
        <li>
          <span>Human gate</span> Integration owner review
        </li>
      </ul>
    </div>
  );
}

function ChecksScreen() {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Checks</strong>
        <span>Review state</span>
      </header>
      <article>
        <p>
          <b>Focused test.</b> Passed.
        </p>
        <p>
          <b>Type check.</b> Passed.
        </p>
        <p>
          <b>Integration review.</b> Waiting for the owner.
        </p>
      </article>
    </div>
  );
}

function DocumentScreen({ artifact }: { artifact?: DemoMessage["artifact"] }) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>Draft, not sent</span>
      </header>
      <article>
        {artifact ? (
          <ArtifactCard artifact={artifact} />
        ) : (
          <p>The agent is preparing the next reviewable artifact.</p>
        )}
      </article>
    </div>
  );
}

function MailScreen({ artifact }: { artifact?: DemoMessage["artifact"] }) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Drafts</strong>
        <em>Nothing sent</em>
      </header>
      <p>
        <span>Status</span>
        Waiting for a person to approve
      </p>
      <div>
        {artifact
          ? "The approved artifact is attached to this draft."
          : "No message leaves the workspace without approval."}
      </div>
    </div>
  );
}

function PreviewScreen({ artifact }: { artifact?: DemoMessage["artifact"] }) {
  return (
    <div className="site site-page">
      <header>
        <strong>Client starter</strong>
        <em>Preview only</em>
      </header>
      <h4>One workflow, ready to judge</h4>
      {artifact ? (
        <ArtifactCard artifact={artifact} />
      ) : (
        <p>Setup, controls, and the operator handoff stay in one package.</p>
      )}
    </div>
  );
}
