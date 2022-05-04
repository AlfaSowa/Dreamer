import { FC } from "react";

const DreamsTypesList: FC = ({ children }) => (
  <div className="grid grid-cols-3 grid-flow-row gap-2">{children}</div>
);

export default DreamsTypesList;
