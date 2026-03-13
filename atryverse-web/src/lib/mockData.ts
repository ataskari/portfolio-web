/**
 * Mock data for Phase 1 — replaces the Prisma/Supabase query in Phase 3.
 * The Project type is imported from the canonical types layer.
 */
import type { Project } from "@/types";

export type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "p1",
    slug: "neura-chatbot",
    title: "NEURA CHATBOT",
    year: "2024",
    tags: ["AI AGENTS", "FULL-STACK"],
    imageBg: "bg-blue-200",
    is_featured: true,
    description:
      "An intelligent customer service agent built with Next.js, OpenAI APIs, and Pinecone vector database. Capable of semantic search and contextual memory.",
    youtubeUrl: undefined,
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "p2",
    slug: "vision-sync",
    title: "VISION SYNC",
    year: "2024",
    tags: ["MULTIMODAL AI", "FULL-STACK"],
    imageBg: "bg-slate-300",
    is_featured: true,
    description:
      "Real-time object detection diagnostic tool for automated manufacturing lines. Built using PyTorch and deployed via edge computing.",
    youtubeUrl: undefined,
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "p3",
    slug: "data-mind",
    title: "DATA MIND",
    year: "2023",
    tags: ["RAG PIPELINE", "FULL-STACK"],
    imageBg: "bg-blue-100",
    is_featured: true,
    description:
      "A secure Document QA system allowing enterprises to chat with their internal PDFs and unstructured data without compromising privacy.",
    youtubeUrl: undefined,
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "p4",
    slug: "ai-workflow-orchestrator",
    title: "AI WORKFLOW ORCHESTRATOR",
    year: "2023",
    tags: ["AI UX", "FULL-STACK"],
    imageBg: "bg-indigo-100",
    is_featured: true,
    description:
      "Drag-and-drop workflow builder that allows non-technical users to chain multi-step AI prompts to automate long-form content generation.",
    youtubeUrl: undefined,
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "p5",
    slug: "synth-voice",
    title: "SYNTH VOICE",
    year: "2022",
    tags: ["MULTIMODAL AI", "AI UX"],
    imageBg: "bg-slate-200",
    is_featured: false,
    description:
      "iOS mobile app that utilizes deep learning voice synthesis models to create realistic artificial narrators for independent authors.",
    youtubeUrl: undefined,
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: "p6",
    slug: "predictive-engine",
    title: "PREDICTIVE ENGINE",
    year: "2022",
    tags: ["AI AGENTS", "RAG PIPELINE"],
    imageBg: "bg-gray-300",
    is_featured: false,
    description:
      "Time-series forecasting module built into an existing fintech tracking platform, improving revenue predictions by 28%.",
    youtubeUrl: undefined,
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
];
