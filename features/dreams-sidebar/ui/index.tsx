import { FC } from "react";
import { ButtonIcon, Stack, Typography } from "../../../shared/components";
import { useDreams } from "../../../shared/hooks";

const DreamsSidebar: FC = () => {
  const { dreams } = useDreams();
  return (
    <div>
      <Stack className="group px-1 cursor-pointer h-[25px]">
        <Typography>Список задач</Typography>

        <Stack className="ml-auto hidden group-hover:flex">
          <ButtonIcon size="small" onClick={() => {}}>
            +
          </ButtonIcon>
          <ButtonIcon size="small" onClick={() => {}}>
            ...
          </ButtonIcon>
        </Stack>
      </Stack>

      <Stack direction="col" className="mt-2">
        {dreams.map((d) => (
          <div
            className="h-[24px] flex items-center hover:bg-sky-700 px-2 cursor-pointer"
            key={d.id}
          >
            {d.id}
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default DreamsSidebar;
