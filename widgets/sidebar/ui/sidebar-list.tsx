import { FC, ReactNode } from "react";

interface ISidebarList {
  children: ReactNode;
}

export const SidebarList: FC<ISidebarList> = ({ children }) => (
  <nav>
    <ul>{children}</ul>
  </nav>
);
