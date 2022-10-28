import { FC, ReactNode } from "react";

interface IBox {
  children: ReactNode;
}
const Box: FC<IBox> = ({ children }) => {
  return <div className="py-4 px-2">{children}</div>;
};

export default Box;
