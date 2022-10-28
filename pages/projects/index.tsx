import { NextPage } from "next";
import { ProjectCard } from "../../entities/project";
import PublicLayout from "../../layouts/public.layout";
import { Stack } from "../../shared/components";
import Box from "../../shared/components/box";
import { useProjects } from "../../shared/hooks";
import { TopBar } from "../../widgets/top-bar";

const Projects: NextPage = () => {
  const { projects } = useProjects();
  console.log("projects", projects);

  return (
    <PublicLayout>
      <TopBar title="Проекты" />

      <Box>
        <Stack wrap>
          {projects.map((p) => (
            <ProjectCard key={p.id} data={p} />
          ))}
        </Stack>
      </Box>
    </PublicLayout>
  );
};

export default Projects;
