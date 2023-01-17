import clsx from "clsx";
import { ReactNode } from "react";

interface IMainBlock {
  children: ReactNode;
}
export const MainBlock = ({ children }: IMainBlock) => (
  <main
    className={clsx(
      "min-h-screen",
      "max-h-screen",
      "overflow-y-auto",
      "bg-[color:var(--color-bg)]",
      "flex-1"
    )}
  >
    {children}
  </main>
);
