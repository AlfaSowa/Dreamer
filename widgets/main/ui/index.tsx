import clsx from "clsx";
import { FC } from "react";

const MainBlock: FC = ({ children }) => (
  <main
    className={clsx(
      "min-h-screen",
      "max-h-screen",
      "overflow-y-auto",
      "bg-[color:var(--color-bg)]",
      "flex-1",
      "pl-4"
    )}
  >
    {children}
  </main>
);

export default MainBlock;
