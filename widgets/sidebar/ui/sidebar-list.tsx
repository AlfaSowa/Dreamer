import { FC } from "react";

export const SidebarList: FC = ({ children }) => (
  <nav>
    <ul>{children}</ul>
  </nav>
);
