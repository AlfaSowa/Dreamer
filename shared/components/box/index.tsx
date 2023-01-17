import { ReactNode } from "react";

interface IBox {
  children: ReactNode;
}
const Box = ({ children }: IBox) => {
  return <div className="py-4 px-2">{children}</div>;
};

export default Box;
