import Link from "next/link";
import { useEffect } from "react";
import {
  Button,
  ButtonIcon,
  Stack,
  Typography,
} from "../../../../shared/components";
import { useProjects } from "../../../../shared/hooks";

export const ProjectsSidebar = () => {
  const { projects, getProjects, addNewProject, deleteProject, isLoad } =
    useProjects();

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
          <ButtonIcon size="small" onClick={addNewProject}>
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
              className="h-[24px] flex items-center justify-between hover:bg-sky-700 px-2 cursor-pointer"
              key={d.id}
            >
              <Link href={`/projects/${d.id}`}>
                <a>{d.name}</a>
              </Link>

              <Button onClick={() => deleteProject(d.id)}>удалить</Button>
            </div>
          ))}
        </Stack>
      )}
    </div>
  );
};
