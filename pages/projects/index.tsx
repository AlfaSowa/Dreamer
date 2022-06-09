import { NextPage } from "next";
import { ProjectCard } from "../../entities/project";
import PublicLayout from "../../layouts/public.layout";
import { Stack, Typography } from "../../shared/components";
import { useProjects } from "../../shared/hooks";

const Projects: NextPage = () => {
  const { projects } = useProjects();
  return (
    <PublicLayout>
      <Typography component="h1">Заголовок страницы</Typography>

      <Stack wrap>
        {projects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </Stack>

      <div>123123</div>
    </PublicLayout>
  );
};

export default Projects;
