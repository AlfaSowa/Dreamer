import { FC } from "react";
import { IProjects } from "../../../shared/api/types";
import { Button, Card, Stack, Typography } from "../../../shared/components";

interface IProjectCard {
  data: IProjects;
}
const ProjectCard: FC<IProjectCard> = ({ data: p }) => {
  return (
    <Card>
      <Typography component="h5">{p.id}</Typography>

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

export default ProjectCard;
