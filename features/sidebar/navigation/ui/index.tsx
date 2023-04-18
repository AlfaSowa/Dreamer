import { SidebarItem, SidebarList } from "../../../../entities/sidebar";
import { TITLES } from "../../../../service/constants";

export const NavigationSidebar = () => {
  return (
    <SidebarList>
      <SidebarItem link="/">Главная</SidebarItem>
      <SidebarItem link="/projects">{TITLES.PROJECTS}</SidebarItem>
    </SidebarList>
  );
};
