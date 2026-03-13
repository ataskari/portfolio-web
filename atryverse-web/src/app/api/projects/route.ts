import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { Project } from "@/types";

/**
 * GET /api/projects
 *
 * Supported query params:
 *   ?tag=AI+AGENTS   — filter by a single tag (case-insensitive)
 *   ?featured=true   — return only is_featured projects
 *
 * Phase 2: Now backed by Prisma + Supabase PostgreSQL.
 * Phase 1 mockData has been replaced with real Prisma queries.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const tag = searchParams.get("tag");
    const featuredOnly = searchParams.get("featured") === "true";

    const rawProjects = await prisma.project.findMany({
      where: {
        ...(featuredOnly ? { is_featured: true } : {}),
        ...(tag
          ? {
              tags: {
                some: {
                  tag: {
                    name: { equals: tag, mode: "insensitive" },
                  },
                },
              },
            }
          : {}),
      },
      include: {
        // Include the join table + tag names
        tags: {
          include: { tag: true },
        },
      },
      orderBy: [
        { year: "desc" },
        { created_at: "desc" }
      ],
    });

    // Transform DB shape → frontend Project type
    const projects: Project[] = rawProjects.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      description: p.description,
      year: p.year,
      imageBg: p.imageBg,
      imageUrl: p.image_url ?? undefined,
      is_featured: p.is_featured,
      tags: p.tags.map((pt) => pt.tag.name),
      youtubeUrl: p.youtube_url ?? undefined,
      githubUrl: p.github_url ?? undefined,
      liveDemoUrl: p.live_demo_url ?? undefined,
    }));

    return NextResponse.json({ data: projects }, { status: 200 });
  } catch (error) {
    console.error("[GET /api/projects] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects. Please try again later." },
      { status: 500 }
    );
  }
}
