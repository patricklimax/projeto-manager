"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { ProjectItem } from "./project-item";
import { getProjectsApi } from "@/api/vercel";

export const ListProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProjects = async () => {
    try {
      const data = await getProjectsApi();
      setProjects(data);
      setLoading(false);
    } catch (err) {
      setError("Erro ao carregar projetos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="w-full h-full">
      {loading && (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-10">
          <div className="w-72 h-72 border-[40px] rounded-full animate-spin border-violet-600 border-t-violet-950" />
          <h2 className="py-10 text-4xl font-semibold text-center">
            Carregando projetos...
          </h2>
        </div>
      )}

      {error && (
        <div className="py-10 text-4xl font-semibold text-center text-orange-600">
          {error}
        </div>
      )}

      {projects.length > 0 && (
        <>
          <h2 className="py-10 text-4xl font-semibold text-center">
            Projetos na Vercel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
