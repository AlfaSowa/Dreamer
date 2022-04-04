/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { FC, useCallback } from "react";
import Link from "next/link";
import SidebarMenuItem from "../../components/menu/sidebar-menu-item.component";
import SidebarMenu from "../../components/menu/sidebar-menu.component";
import SidebarDreamtypesItem from "./component/item/dreamtypes-item.component";
import styles from "./styles.module.scss";
import ButtonAdd from "../../../ui/buttons/add/button-add.component";
import { useDreams } from "../../../../hooks/account/useDreams";

const SidebarDreamtypes: FC = () => {
  const { dreamsTypes, addDreamType } = useDreams();

  const handleClick = useCallback(() => {
    const result = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
      result.push(i);
    }

    addDreamType({
      name: "Тип планов без имени",
      id: String(new Date().getMilliseconds()),
      children: result.map((item) => ({
        name: `План без имени-${item}`,
        id: String(new Date().getMilliseconds() + item),
      })),
    });
  }, [addDreamType]);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link href="/dreamstypes">
          <a className={styles.title}>Категории планов</a>
        </Link>

        <div className={styles.actions}>
          <ButtonAdd onClick={handleClick} />
        </div>
      </div>

      {dreamsTypes.length > 0 && (
        <SidebarMenu>
          {dreamsTypes.map((item) => (
            <SidebarMenuItem key={item.id} link={`/dreamstypes/${item.id}`}>
              <SidebarDreamtypesItem>{item.name}</SidebarDreamtypesItem>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      )}
    </div>
  );
};

export default SidebarDreamtypes;
