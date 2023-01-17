import { Project } from "../../../shared/api/models";
import { Card, Typography } from "../../../shared/components";

interface IProjectCard {
  data: Project;
}

export const ProjectCard = ({ data: p }: IProjectCard) => {
  return (
    <Card link={`projects/${p.id}`}>
      <Typography component="h5">{p.name}</Typography>

      {p.description && <div>{p.description}</div>}
    </Card>
  );
};
