# KeenKeeper

KeenKeeper is a small relationship-management dashboard for keeping meaningful friendships in view. Browse friends, see how recently you connected, log a call, text, or video check-in, and review a timeline and interaction breakdown.

## Features

- Friend dashboard backed by local mock data, with contact status, tags, and last-contact indicators.
- Individual friend profiles with relationship goals, due dates, and quick check-in actions.
- In-session check-in logging for calls, texts, and video chats, with success notifications.
- Searchable, filterable, and date-sortable interaction timeline.
- Interaction-type analytics using a responsive pie chart.
- Responsive navigation, loading state, and dedicated not-found experiences.

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- React 19
- Tailwind CSS 4 and daisyUI 5
- Recharts for analytics visualizations
- React Icons and React Toastify

## Getting started

### Prerequisites

- Node.js 20.9 or newer
- npm (included with Node.js)

### Install and run

```bash
git clone <your-repository-url>
cd keen-keeper
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build. |

## Routes

| Route | Description |
| --- | --- |
| `/` | Dashboard with the connection summary and all friends. |
| `/friends` | Friend directory. |
| `/friends/[friendId]` | Friend profile, relationship goal, and quick check-in controls. |
| `/timeline` | Check-in history with search, type filtering, and date sorting. |
| `/stats` | Check-in totals visualized by interaction type. |

## Project structure

```text
src/
  app/                 # App Router pages, layout, metadata icon, and global styles
  components/          # Shared UI components
  context/             # In-memory check-in state
public/
  friends.json         # Local friend data used by the directory and profile pages
  images/              # Brand, social, and interaction icons
```

## Data and current limitations

- Friend data is local mock data in `public/friends.json`.
- Check-ins are stored in React state only. They reset on a full page refresh and are not shared between users.
- The **Add a Friend**, **Snooze**, **Archive**, **Delete**, and **Edit** controls are currently presentation-only; they do not change the data.
- Profile photos are loaded from `randomuser.me`; the allowed remote image host is configured in `next.config.mjs`.
- Footer legal links point to routes that have not yet been implemented.

## Next steps

To make KeenKeeper production-ready, add authentication and a persistent data store, replace mock JSON with server-side data access, implement the profile actions, and add tests for check-in, filtering, and sorting behavior.

## License

This project does not currently declare a license.
