import { FC, MouseEvent, useCallback } from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import styles from "./styles.module.scss";
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
    <div className={styles.root}>
      <div className={styles.icon}>
        <StickyNote2Icon />
      </div>

      <div>{children}</div>

      <div className={styles.actions}>
        <ButtonSettings onClick={handleClickSettings} />
        <ButtonAdd onClick={handleClickAdd} />
      </div>
    </div>
  );
};

export default SidebarDreamtypesItem;
