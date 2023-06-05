import { ReactNode } from "react";
import { IBaseElemet } from "../interface";

interface IGrid extends IBaseElemet {
  children: ReactNode;
}

export const Grid = ({ children }: IGrid) => {
  return <div className="grid grid-cols-4 gap-2">{children}</div>;
};
