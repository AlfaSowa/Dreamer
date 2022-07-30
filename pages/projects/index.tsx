import { NextPage } from "next";
import { ProjectCard } from "../../entities/project";
import PublicLayout from "../../layouts/public.layout";
import { Stack } from "../../shared/components";
import { useProjects } from "../../shared/hooks";
import { TopBar } from "../../widgets/top-bar";

const Projects: NextPage = () => {
  const { projects } = useProjects();

  return (
    <PublicLayout>
      <TopBar title="Проекты" />

      <Stack wrap>
        {projects.map((p) => (
          <ProjectCard key={p.id} data={p} />
        ))}
      </Stack>
    </PublicLayout>
  );
};

export default Projects;
