import { FC, useEffect } from "react";
import { Project } from "../../../shared/api/models";
import { Button, Card, Stack, Typography } from "../../../shared/components";
import { useProjects } from "../../../shared/hooks";

interface IProjectCard {
  data: Project;
  link?: string;
}
const ProjectCard: FC<IProjectCard> = ({ data: p, link }) => {
  return (
    <Card link={link}>
      <Typography component="h5">{p.name}</Typography>

      <div>
        <div>23423</div>
        <div>23423</div>
        <div>23423</div>
        <div>23423</div>
        <div>23423</div>
        <div>23423</div>
        <div>23423</div>
      </div>

      <Stack>
        <Button onClick={() => {}}>кнопка</Button>
        <Button onClick={() => {}}>кнопка</Button>
      </Stack>
    </Card>
  );
};

ProjectCard.defaultProps = {
  link: null,
};

export default ProjectCard;
