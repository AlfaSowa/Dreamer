import clsx from "clsx";
import { FC, ReactNode } from "react";

interface IMainBlock {
  children: ReactNode;
}
const MainBlock: FC<IMainBlock> = ({ children }) => (
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

export default MainBlock;
