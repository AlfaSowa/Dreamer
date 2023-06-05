import { NextPage } from "next";
import { useState } from "react";
import { ProjectCard } from "../../entities/project";
import PublicLayout from "../../layouts/public.layout";
import Box from "../../shared/components/box";
import { useProjects } from "../../shared/hooks";
import { TopBar } from "../../widgets/top-bar";
import { TITLES } from "../../service/constants";
import { EmptyProject } from "../../shared/api/models";
import { Modal } from "../../shared/components/modal";
import { Grid } from "../../shared/components/grid";

const emptyCard: EmptyProject = {
  name: "Создать новый проект",
};
const Projects: NextPage = () => {
  const { projects } = useProjects();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <PublicLayout>
      <TopBar title={TITLES.PROJECTS} />

      <Box>
        <Grid>
          <ProjectCard emptyData={emptyCard} onClick={handleClick} />

          {projects.map((p) => (
            <ProjectCard key={p.id} data={p} />
          ))}
        </Grid>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <div className="mx-auto max-w-4xl p-4 bg-slate-200">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </Modal>
    </PublicLayout>
  );
};

export default Projects;
