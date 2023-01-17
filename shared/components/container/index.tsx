import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}
const Container = ({ children }: IContainer) => {
  return <div className="flex">{children}</div>;
};

export default Container;
