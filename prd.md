# Product Requirements Document (PRD): Professional Portfolio Ecosystem

This document outlines the strategic, functional, and technical specifications for a high-performance, two-page professional portfolio designed to showcase engineering excellence and product thinking.

---

## 1. Strategic Overview

### Purpose & Problem Statement

In a crowded talent market, a standard resume often fails to convey the **depth of technical implementation** and **product intuition**. Most developer portfolios are either too cluttered or lack the "at-a-glance" impact required by busy hiring teams.

This application solves the "Proof of Work" problem by providing a high-signal, low-friction interface that balances visual storytelling with technical transparency.

### Primary Goal

To convert a "visitor" (Recruiter/Lead) into an "inquirer" by demonstrating proficiency in modern web architecture, UI/UX polish, and organized project management within the first **30 seconds** of interaction.

---

## 2. Target Audience

| Audience Segment    | Primary Need                                      | Desired Outcome                                       |
| ------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| **Recruiters**      | Quick validation of skills and contact info.      | "Is this person a fit for the role? Let's reach out." |
| **Tech Leads**      | Deep dive into code quality and stack complexity. | "How do they solve problems? Let's check the GitHub." |
| **Peers/Community** | Inspiration and networking.                       | "This is a clean build. I want to follow their work." |

---

## 3. MVP Core Features

| Feature Name           | User Goal                         | Technical Implementation Logic                                                                                            |
| ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **"Top 4" Hero Grid**  | Immediate exposure to best work.  | A priority-weighted query fetching the 4 most recent or "featured" projects from the DB.                                  |
| **Interactive Modals** | Access details without page hops. | Client-side state management (or URL-based routing) to trigger detail views with YouTube/GitHub embeds.                   |
| **Expandable Gallery** | Discover full breadth of work.    | A "Show More" toggle that lazily loads the remaining project set from a cached Supabase/Prisma query.                     |
| **Real-time Filter**   | Locate specific tech stacks.      | Client-side filtering logic using an array of `tags`. Instant UI updates via state filtering (e.g., `projects.filter()`). |
| **Mobile-First UX**    | Seamless viewing on the go.       | Responsive utility classes (Tailwind) ensuring the "Top 4" grid stacks gracefully.                                        |

---

## 4. User Journey (The "Happy Path")

1. **Landing:** The user lands on the **Main Page** and is greeted by a concise bio and the **Top 4** featured projects.
2. **Discovery:** The user hovers over a project card (smooth scale effect) and clicks it.
3. **Engagement:** A modal slides in showing a **YouTube demo**, a brief technical challenge/solution description, and a **GitHub link**.
4. **Exploration:** The user closes the modal and clicks "View All Projects." The **Gallery** expands.
5. **Filtering:** The user types "TypeScript" in the search bar. The gallery updates instantly to show relevant work.
6. **Context:** The user navigates to **About Me** to read about the developer's journey and technical philosophy.

---

## 5. Technical Architecture

### Tech Stack Recommendation

To ensure maintainability and performance, the following stack is recommended:

- **Framework:** **Next.js 15 (App Router)** - Provides the best balance of Server-Side Rendering (SEO) and Client-Side Interactivity.
- **Styling:** **Tailwind CSS** - Ensures a clean, utility-first design system without CSS bloat.
- **Database & ORM:** **Supabase (PostgreSQL) + Prisma** - A robust, type-safe way to manage project data.
- **Animations:** **Framer Motion** - For smooth layout transitions and modal interactions.
- **Icons:** **Lucide-React** - Lightweight, consistent iconography.

### Data Schema (Normalized SQL)

```sql
-- Project Table: Stores core metadata
Table Projects {
  id UUID [primary key]
  title VARCHAR
  description TEXT
  slug VARCHAR [unique]
  youtube_url VARCHAR
  github_url VARCHAR
  live_demo_url VARCHAR
  is_featured BOOLEAN [default: false]
  created_at TIMESTAMP
}

-- Technologies Table: Central list of tech (e.g., React, Prisma)
Table Technologies {
  id UUID [primary key]
  name VARCHAR [unique]
  icon_key VARCHAR -- For Lucide icon mapping
}

-- Many-to-Many Join Table
Table Project_Technologies {
  project_id UUID [ref: > Projects.id]
  tech_id UUID [ref: > Technologies.id]
}

```

---

## 6. Constraints & Design Principles

- **Clean Code Over Over-Engineering:** Avoid heavy state management libraries (Redux) unless the app scales beyond a portfolio. Use React `useState` and `useMemo` for filtering.
- **Performance:** Image optimization via `next/image` is mandatory. The "Top 4" images should be pre-loaded.
- **Type Safety:** Every project object must be strictly typed via TypeScript/Prisma to prevent runtime errors during the "Happy Path."

---

Would you like me to generate the **Prisma Schema** file and the basic **Project Card component** logic to get the development started?
