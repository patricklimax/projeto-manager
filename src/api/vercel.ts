import axios from "axios";

const VERCEL_API_URL = "https://api.vercel.com/v9/projects";

export const getProjectsApi = async () => {
  const response = await axios.get(VERCEL_API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_TOKEN}`,
    },
  });

  const projects = response.data.projects.map((project: any) => {
    const latestDeployment = project.latestDeployments?.[0];

    return {
      id: project.id,
      name: project.name,
      readyState: latestDeployment?.readyState || undefined,
    };
  });

  return projects
};
