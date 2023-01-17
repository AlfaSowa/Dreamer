import { SidebarItem, SidebarList } from "../../../../entities/sidebar";

export const NavigationSidebar = () => {
  return (
    <SidebarList>
      <SidebarItem link="/">Главная</SidebarItem>
      <SidebarItem link="/projects">Проекты</SidebarItem>
    </SidebarList>
  );
};
