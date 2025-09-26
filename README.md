# Portfolio Website - Next.js & React

A modern portfolio website built with Next.js, React, and TypeScript, styled with Tailwind CSS.

## Features

- 🚀 Built with Next.js 14.2.33 and React 18
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- ⚡ Fast development with Hot Module Replacement
- 🔧 ESLint for code linting
- 🏗️ App Router architecture

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository or navigate to your project directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next available port) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Project Structure

```
├── public/             # Static assets (images, icons, etc.)
├── src/
│   └── app/           # App Router pages and layouts
│       ├── globals.css # Global styles with Tailwind CSS
│       ├── layout.tsx  # Root layout component
│       └── page.tsx    # Home page component
├── .eslintrc.js       # ESLint configuration
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies and scripts
├── postcss.config.js  # PostCSS configuration for Tailwind
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization

- Edit `src/app/page.tsx` to customize the home page
- Modify `src/app/globals.css` to adjust global styles
- Update `tailwind.config.ts` to customize Tailwind CSS theme
- Add new pages by creating files in the `src/app` directory

## Technologies Used

- **Next.js** - React framework for production
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting utility
- **npm** - Package manager

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://reactjs.org/) - learn React
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - typed JavaScript

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.