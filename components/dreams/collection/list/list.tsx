import { FC } from "react";

const DreamsCollectionList: FC = ({ children }) => (
  <div className="grid grid-cols-4 grid-flow-row gap-2">{children}</div>
);

export default DreamsCollectionList;
