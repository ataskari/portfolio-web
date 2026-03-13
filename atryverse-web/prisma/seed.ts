/**
 * Database seed script — Phase 3
 * Run with: pnpm prisma db seed
 */

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Load .env manually for ts-node
import * as dotenv from "dotenv";
dotenv.config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const TAGS = [
  "AI AGENTS",
  "RAG PIPELINE",
  "MULTIMODAL AI",
  "AI UX",
  "FULL-STACK",
];

const PROJECTS = [
  {
    slug: "atryverse-v1",
    title: "ATRYVERSE PORTFOLIO V1",
    year: "2026",
    imageBg: "bg-blue-600",
    is_featured: true,
    description: "Your professional AI Product Engineer portfolio. Built with Next.js 15, Prisma v7, and Supabase. Features a dark-mode IDE terminal and a real-time project gallery.",
    youtube_url: null,
    github_url: "https://github.com/ataskari/portfolio-web",
    live_demo_url: "http://localhost:3000",
    image_url: "https://xwjmsondqgwonqgdjykn.supabase.co/storage/v1/object/public/atryverse-portfolio/one.png",
    tags: ["AI UX", "FULL-STACK"],
  },
  {
    slug: "neura-chatbot",
    title: "NEURA CHATBOT",
    year: "2024",
    imageBg: "bg-blue-200",
    is_featured: true,
    description:
      "An intelligent customer service agent built with Next.js, OpenAI APIs, and Pinecone vector database. Capable of semantic search and contextual memory.",
    youtube_url: null,
    github_url: null,
    live_demo_url: null,
    image_url: null,
    tags: ["AI AGENTS", "FULL-STACK"],
  },
  {
    slug: "vision-sync",
    title: "VISION SYNC",
    year: "2024",
    imageBg: "bg-slate-300",
    is_featured: true,
    description:
      "Real-time object detection diagnostic tool for automated manufacturing lines. Built using PyTorch and deployed via edge computing.",
    youtube_url: null,
    github_url: null,
    live_demo_url: null,
    image_url: null,
    tags: ["MULTIMODAL AI", "FULL-STACK"],
  },
  {
    slug: "data-mind",
    title: "DATA MIND",
    year: "2023",
    imageBg: "bg-blue-100",
    is_featured: true,
    description:
      "A secure Document QA system allowing enterprises to chat with their internal PDFs and unstructured data without compromising privacy.",
    youtube_url: null,
    github_url: null,
    live_demo_url: null,
    image_url: null,
    tags: ["RAG PIPELINE", "FULL-STACK"],
  },
  {
    slug: "ai-workflow-orchestrator",
    title: "AI WORKFLOW ORCHESTRATOR",
    year: "2023",
    imageBg: "bg-indigo-100",
    is_featured: true,
    description:
      "Drag-and-drop workflow builder that allows non-technical users to chain multi-step AI prompts to automate long-form content generation.",
    youtube_url: null,
    github_url: null,
    live_demo_url: null,
    image_url: null,
    tags: ["AI UX", "FULL-STACK"],
  },
  {
    slug: "synth-voice",
    title: "SYNTH VOICE",
    year: "2022",
    imageBg: "bg-slate-200",
    is_featured: false,
    description:
      "iOS mobile app that utilizes deep learning voice synthesis models to create realistic artificial narrators for independent authors.",
    youtube_url: null,
    github_url: null,
    live_demo_url: null,
    image_url: null,
    tags: ["MULTIMODAL AI", "AI UX"],
  },
  {
    slug: "predictive-engine",
    title: "PREDICTIVE ENGINE",
    year: "2022",
    imageBg: "bg-gray-300",
    is_featured: false,
    description:
      "Time-series forecasting module built into an existing fintech tracking platform, improving revenue predictions by 28%.",
    youtube_url: null,
    github_url: null,
    live_demo_url: null,
    tags: ["AI AGENTS", "RAG PIPELINE"],
  },
];

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Upsert tags
  const tagRecords = await Promise.all(
    TAGS.map((name) =>
      prisma.tag.upsert({ where: { name }, update: {}, create: { name } })
    )
  );
  const tagMap = Object.fromEntries(tagRecords.map((t) => [t.name, t.id]));
  console.log(`✅ Upserted ${tagRecords.length} tags`);

  // 2. Upsert projects + link tags
  for (const p of PROJECTS) {
    const project = await prisma.project.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title,
        description: p.description,
        year: p.year,
        imageBg: p.imageBg,
        is_featured: p.is_featured,
        youtube_url: p.youtube_url,
        github_url: p.github_url,
        live_demo_url: p.live_demo_url,
      },
      create: {
        slug: p.slug,
        title: p.title,
        description: p.description,
        year: p.year,
        imageBg: p.imageBg,
        is_featured: p.is_featured,
        youtube_url: p.youtube_url,
        github_url: p.github_url,
        live_demo_url: p.live_demo_url,
      },
    });

    // Clean and re-link tags
    await prisma.projectTag.deleteMany({ where: { project_id: project.id } });
    await prisma.projectTag.createMany({
      data: p.tags.map((tagName) => ({
        project_id: project.id,
        tag_id: tagMap[tagName],
      })),
    });

    console.log(`  ✅ Seeded: ${project.title}`);
  }

  console.log("🎉 Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
