import { NextPage } from "next";
import { ProjectCard } from "../../entities/project";
import PublicLayout from "../../layouts/public.layout";
import { Stack } from "../../shared/components";
import { useProjects } from "../../shared/hooks";
import { TopBar } from "../../widgets/top-bar";

const Projects: NextPage = () => {
  const { projects } = useProjects();

  console.log("Projects page>>>", projects);

  return (
    <PublicLayout>
      <TopBar title="Проекты" />

      <Stack wrap>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            data={project}
            link={`projects/${project.id}`}
          />
        ))}
      </Stack>
    </PublicLayout>
  );
};

export default Projects;
