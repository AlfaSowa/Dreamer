import { FC } from "react";
import { useDreams } from "../../../shared/hooks";

const DreamsSidebar: FC = () => {
  const { dreams } = useDreams();
  return (
    <div>
      <div>12312312</div>
      {dreams.map((d) => (
        <div>{d.id}</div>
      ))}
    </div>
  );
};

export default DreamsSidebar;
