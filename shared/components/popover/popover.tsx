import { ReactNode } from "react";
import { IBaseElemet } from "../interface";

export interface IPopover extends IBaseElemet {
  children: ReactNode;
}

export const Popover = ({ children }: IPopover) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
