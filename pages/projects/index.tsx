import { NextPage } from "next";
import { useCallback } from "react";
import { ProjectCard } from "../../entities/project";
import PublicLayout from "../../layouts/public.layout";
import { Stack } from "../../shared/components";
import Box from "../../shared/components/box";
import { useProjects } from "../../shared/hooks";
import { TopBar } from "../../widgets/top-bar";
import { TITLES } from "../../service/constants";
import { EmptyProject } from "../../shared/api/models";

const emptyCard: EmptyProject = {
  name: "Создать новый проект",
};
const Projects: NextPage = () => {
  const { projects } = useProjects();

  const handleClick = useCallback(() => {
    console.log(1);
  }, []);

  return (
    <PublicLayout>
      <TopBar title={TITLES.PROJECTS} />

      <Box>
        <Stack wrap>
          <ProjectCard emptyData={emptyCard} onClick={handleClick} />

          {projects.map((p) => (
            <ProjectCard key={p.id} data={p} />
          ))}
        </Stack>
      </Box>
    </PublicLayout>
  );
};

export default Projects;
