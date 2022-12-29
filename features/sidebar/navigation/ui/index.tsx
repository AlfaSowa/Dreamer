import { FC } from "react";
import { SidebarItem, SidebarList } from "../../../../entities/sidebar";

export const NavigationSidebar: FC = () => {
  return (
    <SidebarList>
      <SidebarItem link="/">Главная</SidebarItem>
      <SidebarItem link="/projects">Проекты</SidebarItem>
    </SidebarList>
  );
};
