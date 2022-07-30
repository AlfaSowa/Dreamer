import { FC, useEffect } from "react";
import { ButtonIcon, Stack, Typography } from "../../../../shared/components";
import { useProjects } from "../../../../shared/hooks";

const ProjectsSidebar: FC = () => {
  const { projects, getProjects, isLoad } = useProjects();

  console.log("ProjectsSidebar", projects);

  useEffect(() => {
    if (!isLoad) {
      getProjects();
    }
  }, [getProjects, isLoad]);

  return (
    <div>
      <Stack className="group px-1 cursor-pointer h-[25px]">
        <Typography>Список проектов</Typography>

        <Stack className="ml-auto hidden group-hover:flex">
          <ButtonIcon size="small" onClick={() => {}}>
            +
          </ButtonIcon>
          <ButtonIcon size="small" onClick={() => {}}>
            ...
          </ButtonIcon>
        </Stack>
      </Stack>

      {projects.length > 0 && (
        <Stack direction="col" className="mt-2">
          {projects.map((d) => (
            <div
              className="h-[24px] flex items-center hover:bg-sky-700 px-2 cursor-pointer"
              key={d.id}
            >
              {d.id}
            </div>
          ))}
        </Stack>
      )}
    </div>
  );
};

export default ProjectsSidebar;
