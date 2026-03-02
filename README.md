# of-website

A [Next.js](https://nextjs.org) project built with TypeScript, Tailwind CSS v4, GSAP animations, and Radix UI / shadcn components.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later) → [nodejs.org](https://nodejs.org)
- **Git** → [git-scm.com](https://git-scm.com)
- **npm** (comes bundled with Node.js)

Verify your installations:

```bash
node -v
npm -v
git -v
```

---

## Setup on a New Machine

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/of-website.git
```

> Replace `your-username` with the actual GitHub username where the repo is hosted.

### 2. Navigate into the Project

```bash
cd of-website
```

### 3. Install Dependencies

```bash
npm install
```

> The `node_modules` folder is excluded from Git, so this step is always required on a fresh clone.

### 4. Start the Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. 🎉

---

## Quick Reference

```bash
git clone https://github.com/your-username/of-website.git
cd of-website
npm install
npm run dev
```

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint checks |

---

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP + Lenis
- **UI Components:** Radix UI + shadcn

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://gsap.com/docs/v3/)
- [shadcn/ui](https://ui.shadcn.com)

---

## Deployment

This project is configured for deployment on [Netlify](https://netlify.com) via `netlify.toml`.  
You can also deploy on [Vercel](https://vercel.com) with zero configuration.
