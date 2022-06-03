import clsx from "clsx";
import { FC } from "react";

const Container: FC = ({ children }) => {
  return <div className={clsx("flex")}>{children}</div>;
};

export default Container;
