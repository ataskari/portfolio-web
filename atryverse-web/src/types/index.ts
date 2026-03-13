/**
 * Core domain types for the portfolio.
 * These are the single source of truth for all project-related data shapes.
 * They mirror the Prisma schema defined in the PRD — ready for Phase 3 DB integration.
 */

export type Project = {
  /** Unique ID — matches UUID primary key in the DB */
  id: string;
  /** URL-safe unique identifier for routing (e.g. "neura-chatbot") */
  slug: string;
  title: string;
  year: string;
  /** Short description of the project's purpose and outcome */
  description: string;
  tags: string[];
  /** Tailwind background class used as the placeholder image color */
  imageBg: string;
  /** Direct link to Supabase Storage or external image */
  imageUrl?: string;
  /** If true, this project appears in the "Top 4" hero grid */
  is_featured: boolean;
  /** Optional links — wired to modal action buttons */
  youtubeUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
};
