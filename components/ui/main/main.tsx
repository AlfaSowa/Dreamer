import clsx from "clsx";
import { FC } from "react";

interface IMainBlock {
  header?: JSX.Element;
}

const MainBlock: FC<IMainBlock> = ({ children, header }) => (
  <main
    className={clsx(
      "min-h-screen",
      "max-h-screen",
      "overflow-y-auto",
      "pl-[230px]",
      "bg-[color:var(--color-bg)]",
      {
        "pt-[40px]": header,
      }
    )}
  >
    {header}
    {children}
  </main>
);

MainBlock.defaultProps = {
  header: null,
};

export default MainBlock;
