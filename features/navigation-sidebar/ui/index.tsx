import { FC } from "react";
import { SidebarItem, SidebarList } from "../../../widgets/sidebar";

const NavigationSidebar: FC = () => {
  return (
    <SidebarList>
      <SidebarItem link="/">Главная</SidebarItem>
      <SidebarItem link="/dreams">Dreams</SidebarItem>
    </SidebarList>
  );
};

export default NavigationSidebar;
