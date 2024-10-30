import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export const ProjectItem = ({ project }: Props) => {
  return (
    <div className="p-4 border rounded-md">
      <p>
        <span className="font-bold">Nome do Projeto:</span>{" "}
        <span>{project.name}</span>
      </p>

      {project.readyState === "INITIALIZING" && (
        <p>
          <span className="font-bold">Status:</span>{" "}
          <span
            className={`${
              project.readyState === "INITIALIZING"
                ? "text-blue-600"
                : "text-white"
            }`}
          >
            {project.readyState}
          </span>
        </p>
      )}
      {project.readyState === "BUILDING" && (
        <p>
          <span className="font-bold">Status:</span>{" "}
          <span
            className={`${
              project.readyState === "BUILDING"
                ? "text-yellow-600"
                : "text-white"
            }`}
          >
            {project.readyState}
          </span>
        </p>
      )}
      {project.readyState === "READY" && (
        <p>
          <span className="font-bold">Status:</span>{" "}
          <span
            className={`${
              project.readyState === "READY" ? "text-emerald-600" : "text-white"
            }`}
          >
            {project.readyState}
          </span>
        </p>
      )}
      {project.readyState === "ERROR" && (
        <p>
          <span className="font-bold">Status:</span>{" "}
          <span
            className={`${
              project.readyState === "ERROR" ? "text-red-600" : "text-white"
            }`}
          >
            {project.readyState}
          </span>
        </p>
      )}
      {project.readyState === "QUEUED" && (
        <p>
          <span className="font-bold">Status:</span>{" "}
          <span
            className={`${
              project.readyState === "QUEUED" ? "text-blue-600" : "text-white"
            }`}
          >
            {project.readyState}
          </span>
        </p>
      )}
    </div>
  );
};
