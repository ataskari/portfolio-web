"use client";

import { useState, useEffect, useCallback } from "react";
import type { Project } from "@/types";

interface UseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Custom hook for fetching projects from the API.
 * Accepts an optional tag filter.
 *
 * In Phase 3, the API route will be backed by a real Prisma query —
 * this hook doesn't need to change at all.
 */
export function useProjects(tag?: string): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (tag && tag !== "ALL") params.set("tag", tag);

      const res = await fetch(`/api/projects?${params.toString()}`);

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const json = await res.json();
      setProjects(json.data ?? []);
    } catch (err) {
      setError("Could not load projects. Please refresh the page.");
      console.error("[useProjects]", err);
    } finally {
      setIsLoading(false);
    }
  }, [tag]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { projects, isLoading, error, refetch: fetchProjects };
}
