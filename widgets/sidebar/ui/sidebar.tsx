import { FC } from "react";

export const Sidebar: FC = ({ children }) => (
  <div className="w-[230px] bg-[color:var(--color-bg-add)]">
    <div className="py-[8px]">{children}</div>
  </div>
);
