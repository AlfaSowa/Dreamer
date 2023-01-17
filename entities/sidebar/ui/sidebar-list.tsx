import { ReactNode } from "react";

interface ISidebarList {
  children: ReactNode;
}

export const SidebarList = ({ children }: ISidebarList) => (
  <nav>
    <ul>{children}</ul>
  </nav>
);
