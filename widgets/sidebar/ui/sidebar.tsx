import { FC, ReactNode } from "react";

interface ISidebar {
  children: ReactNode;
}

export const Sidebar: FC<ISidebar> = ({ children }) => (
  <div className="w-[230px] bg-[color:var(--color-bg-add)]">
    <div className="flex flex-col gap-2 py-[8px]">{children}</div>
  </div>
);
