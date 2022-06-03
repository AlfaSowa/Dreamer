import clsx from "clsx";
import { FC } from "react";
import { IBaseElemet } from "../interface";

interface IStack extends IBaseElemet {
  direction?: "row" | "col";
}

const Stack: FC<IStack> = ({ children, className, direction }) => {
  return (
    <div
      className={clsx(
        className && className,
        `flex-${direction}`,
        "flex items-center items-stretch gap-1"
      )}
    >
      {children}
    </div>
  );
};

Stack.defaultProps = {
  direction: "row",
};

export default Stack;
