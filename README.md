# Allegis Group x SpaceXAI

Passworded customer leave-behind for Allegis Group.

## Run locally

```bash
cp .env.example .env.local
# Add SITE_PASSWORD to .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/data/jobs.ts` holds the three sample workflows and produced artifacts.
- `src/data/screens.ts` maps each demo step to the agent computer.
- `src/components/GrokBotWindow.tsx` keeps chat on the left and computer work on the right.
- `src/components/Storyboard.tsx` shows the scene-in-time flow.
- `src/components/ChapterPayoff.tsx` renders the final artifact.
- `src/lib/auth.ts` validates `SITE_PASSWORD` on the server and issues an HTTP-only session cookie.

## Brand source

`public/brand/allegis-group-wordmark.png` is the current Allegis Group mark
published by Allegis Group in 2018. Its
[archive record](https://commons.wikimedia.org/wiki/File:Allegis_Group_company_logo.png)
identifies
[allegisgroup.com](https://www.allegisgroup.com/) as the source and Allegis
Group as the author.
