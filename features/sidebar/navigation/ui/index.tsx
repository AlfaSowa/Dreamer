import { FC } from "react";
import { SidebarItem, SidebarList } from "../../../../widgets/sidebar";

const NavigationSidebar: FC = () => {
  return (
    <SidebarList>
      <SidebarItem link="/">Главная</SidebarItem>
      <SidebarItem link="/projects">Проекты</SidebarItem>
    </SidebarList>
  );
};

export default NavigationSidebar;
