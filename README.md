# CF Marketing – Agency Website

Marketing website for **CF Marketing**, a digital marketing agency. It is a small multi-page React app that introduces the agency, its process, the services it offers, the team, and a contact form.

## Pages

All pages share a common layout (`src/layout/CommonLayout.tsx`) with a header, footer and a floating pill-shaped navigation bar at the bottom of the screen.

| Route | Section | Content |
| --- | --- | --- |
| `/` | Hero | Agency tagline and call to action |
| `/about-us` | About | Four-step process: discover goals, craft strategy, build, launch & monitor |
| `/our-services` | Services | Digital strategy & planning, creative strategy & web graphics, social media marketing, video/GIF & content marketing, website design & development, SEO, media planning & buying, Shopify development, email marketing |
| `/contact-us` | Contact | Phone, email and location cards plus a contact form (name, email, phone, company, message) |
| `/our-team` | Team | Team member cards |

### Contact form note

The form is marked up for Netlify Forms (`data-netlify="true"`, `name="contact"`), but the React submit handler currently calls `preventDefault()`, resets the form and shows a "Thank you" message, so submissions are not actually sent anywhere. Whether submissions reach Netlify in the deployed site needs confirmation.

## Tech stack

- [Vite](https://vitejs.dev/) 5 + React 18 + TypeScript
- [React Router](https://reactrouter.com/) 6 (`createBrowserRouter`)
- [Tailwind CSS](https://tailwindcss.com/) 3 with PostCSS/Autoprefixer
- ESLint 9 with `typescript-eslint`, `react-hooks` and `react-refresh` plugins

## Getting started

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Vite serves the app on its default port (5173).

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

No test script is configured.

## Configuration

No environment variables are used.

## Project structure

```
src/
  App.tsx       # Router configuration
  layout/       # CommonLayout (header, bottom nav, footer)
  sections/     # hero, about, services, contact, team, header, footer
  assets/       # Service icons/illustrations
```

## Deployment

The app is a static SPA: deploy the `dist/` folder produced by `npm run build` to any static host. Because it uses client-side routing, the host must rewrite unknown paths to `index.html`.
