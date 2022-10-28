import clsx from "clsx";
import { FC, ReactNode } from "react";
import { IBaseElemet } from "../interface";

interface IStack extends IBaseElemet {
  direction?: "row" | "col";
  wrap?: boolean;
  children: ReactNode;
}

const Stack: FC<IStack> = ({ children, className, direction, wrap }) => {
  return (
    <div
      className={clsx(
        "flex",
        className && className,
        `flex-${direction}`,
        direction === "col" ? "items-stretch" : "items-center",
        wrap && "flex-wrap",
        wrap ? "m-[-4px]" : "gap-1"
      )}
    >
      {children}
    </div>
  );
};

Stack.defaultProps = {
  direction: "row",
  wrap: false,
};

export default Stack;
