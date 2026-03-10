# Product Requirements Document (PRD): atyrverse.id

---

## 1. Overview

**App Purpose:** A high-performance, interactive professional portfolio designed to showcase engineering projects through a curated "Best-of" gallery and a comprehensive, searchable archive.

**The Problem:** Traditional resumes and static "link-in-bio" tools fail to capture the depth of technical projects. Recruiters and clients often have to hunt through GitHub repositories or long-form blogs to see actual results (videos, live demos, and code) in one place.

**Primary Goal:** To provide a "frictionless discovery" experience for stakeholders to validate a developer's skills within 60 seconds of landing on the site.

---

## 2. Target Audience & User Types

- **Primary User:** Recruiters and Hiring Managers looking for specific technical stacks.
- **Secondary User:** Potential freelance clients seeking proof of previous work.
- **Admin (The Developer):** The owner who manages, updates, and curates the project list.

---

## 3. Core Features (MVP)

| Feature Name                         | User Goal (Why?)                                                     | Technical Functionality (How?)                                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Curated Hero Gallery**             | Instant exposure to the user's highest-quality work.                 | A "Top 4" grid fetched from the database filtered by a `featured` boolean flag.                                                 |
| **Expandable Project Archive**       | Allow users to dig deeper into the full history of work.             | A "Show All" toggle that triggers a transition from the Top 4 view to a full grid/list view with pagination or infinite scroll. |
| **Real-time Filter & Search**        | Quickly find projects by language, tool, or keyword.                 | Client-side filtering using state management (e.g., React `useMemo`) for instant UI updates as the user types.                  |
| **Dynamic Project Details**          | View media (YouTube) and links (GitHub) without leaving the context. | A modal or dedicated sub-page that renders Markdown-based descriptions and embeds YouTube if a URL is provided in the schema.   |
| **Professional Identity (About Me)** | Establish the "human" element and professional background.           | A dedicated route/section showcasing a bio, technical stack icons, and social proof.                                            |

---

## 4. User Flow (The "Happy Path")

1. **Landing:** User arrives at `atyrverse.id`.
2. **Immediate Insight:** User sees the "Top 4" projects immediately on the Main page.
3. **Exploration:** User clicks a "Featured" card; a detail view opens showing a YouTube demo and a GitHub link.
4. **Deep Dive:** User closes the detail view and clicks "See All Projects."
5. **Refinement:** User types "Next.js" in the search bar. The list instantly filters to show only Next.js projects.
6. **Context:** User navigates to the "About Me" page to read the bio and professional history.
7. **Conversion:** User clicks the "Contact" or "LinkedIn" link to reach out.

---

## 5. Technical System Design

### 5.1 Data Schema (SQL)

The following schema is designed for a relational database like PostgreSQL, optimized for Prisma ORM.

```sql
-- Projects Table
CREATE TABLE "Project" (
  "id" TEXT PRIMARY KEY,
  "title" TEXT NOT NULL,
  "slug" TEXT UNIQUE NOT NULL,
  "description" TEXT NOT NULL,
  "content" TEXT, -- Markdown for details
  "thumbnailUrl" TEXT,
  "youtubeUrl" TEXT,
  "githubUrl" TEXT,
  "liveUrl" TEXT,
  "isFeatured" BOOLEAN DEFAULT false,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP
);

-- Categories/Tags (Many-to-Many)
CREATE TABLE "Tag" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT UNIQUE NOT NULL
);

-- Join Table for Project Tags
CREATE TABLE "_ProjectToTag" (
    "A" TEXT NOT NULL, -- Project ID
    "B" TEXT NOT NULL  -- Tag ID
);

```

### 5.2 Technical Stack

To ensure a clean system and high performance, the following stack is recommended:

- **Frontend:** **Next.js (App Router)** + **TypeScript**. (Standard for SEO and performance).
- **Styling:** **Tailwind CSS** + **Shadcn/UI**. (Fastest way to build a professional, clean interface).
- **Database & ORM:** **PostgreSQL** (via Supabase) + **Prisma**. (Type-safe database access and easy local development).
- **Package Manager:** **pnpm**. (Faster, more efficient disk usage).
- **Runtime:** **Node.js 24.x**.

### 5.3 DevOps & Deployment

- **Environment Setup:** Use **NVM** to lock Node versions.
- **Hosting:** **Vercel** for the frontend and API routes (native Next.js support).
- **Media Hosting:** YouTube for video embeds; Cloudinary or Vercel Blob for image hosting (thumbnails).
- **CI/CD:** Automated deployments via GitHub integration on every `git push`.

---

## 6. Success Metrics (KPIs)

1. **Retention/Time on Page:** Average session duration over 2 minutes (indicating users are watching demos).
2. **Conversion Rate:** Number of clicks on "GitHub" or "LinkedIn" links relative to total unique visitors.
3. **Performance Score:** Achieving a Lighthouse score of 90+ for Performance and SEO.

---
