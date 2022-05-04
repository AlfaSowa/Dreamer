import { FC } from "react";

const DreamsItemList: FC = ({ children }) => (
  <div className="flex flex-auto flex-col gap-6">{children}</div>
);

export default DreamsItemList;
