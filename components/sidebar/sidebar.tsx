import { FC } from "react";

const Sidebar: FC = ({ children }) => (
  <div className="fixed top-0 bottom-0 w-[230px] py-[12px] bg-[color:var(--color-bg-add)]">
    <div className="py-[8px]">{children}</div>
  </div>
);

export default Sidebar;
