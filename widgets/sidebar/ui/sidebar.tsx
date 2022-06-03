import { FC } from "react";

export const Sidebar: FC = ({ children }) => (
  <div className="w-[230px] bg-[color:var(--color-bg-add)]">
    <div className="flex flex-col gap-2 py-[8px]">{children}</div>
  </div>
);
