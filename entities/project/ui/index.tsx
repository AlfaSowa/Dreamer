import { EmptyProject, Project } from "../../../shared/api/models";
import { Card, Typography } from "../../../shared/components";
import { ToolTip } from "../../../shared/components/tooltip";

interface IProjectCard {
  data?: Project;
  emptyData?: EmptyProject;
  onClick?: () => void;
}

export const ProjectCard = ({
  data: p,
  emptyData: empty,
  onClick,
}: IProjectCard) => {
  const data = {
    name: (p || empty)?.name,
    description: (p || empty)?.description,
    ...p,
  };

  return (
    <Card link={data?.id && `projects/${data.id}`} onClick={onClick}>
      <Typography component="h5">{data.name}</Typography>

      {data?.description && <div>{data.description}</div>}

      <ToolTip title="12312 31231">
        <div>111</div>
      </ToolTip>
    </Card>
  );
};

ProjectCard.defaultProps = {
  emptyData: null,
  data: null,
  onClick: null,
};
