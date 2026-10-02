# CustomCoreAI

CustomCoreAI is a high-end software engineering consultancy specializing in robust, scalable solutions for businesses that have outgrown off-the-shelf software. 

This repository contains the marketing website and business OS portal built with modern web technologies.

## Tech Stack

*   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animation:** Custom CSS / Framer Motion (where applicable)

## Design System

The site uses a strict "Obsidian and Acid Lime" design system to convey a highly technical, premium engineering brand.
*   **Base:** `#08090D` (Obsidian)
*   **Cards/Surface:** `#0D1017` / `#0A0C12`
*   **Accents:** `#B4F33C` (Acid Lime)
*   **Borders:** Subtle white opacity (`white/10` to `white/20`)

## Getting Started

1.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install / yarn install
    ```

2.  **Run the development server:**
    ```bash
    pnpm dev
    # or npm run dev / yarn dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `src/app/` - Next.js App Router pages and layouts.
*   `src/components/` - Reusable UI components.
*   `src/data/` - Content data models (Case Studies, Services, Solutions).
*   `public/` - Static assets and images.

## Architecture & Data

Content is primarily driven by TypeScript interfaces located in `src/data/`.
For example, case studies are dynamically routed using the `src/data/case-studies.ts` definitions.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# CustomCoreAi
