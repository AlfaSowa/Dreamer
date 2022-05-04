import { FC, MouseEvent, useCallback } from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ButtonAdd from "../../../../../ui/buttons/add/button-add";
import ButtonSettings from "../../../../../ui/buttons/settings/button-settings";

const SidebarDreamtypesItem: FC = ({ children }) => {
  const handleClickAdd = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handleClickAdd");
  }, []);

  const handleClickSettings = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      console.log("handleClickSettings");
    },
    []
  );

  return (
    <div className="group flex items-center px-1 h-7 text-sm">
      <StickyNote2Icon className="w-4 h-4 mr-[4px]" />

      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {children}
      </div>

      <div className="ml-auto hidden gap-1 group-hover:flex">
        <ButtonSettings onClick={handleClickSettings} />
        <ButtonAdd onClick={handleClickAdd} />
      </div>
    </div>
  );
};

export default SidebarDreamtypesItem;
