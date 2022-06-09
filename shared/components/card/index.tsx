import { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <div className="flex-[0_0_calc(100%/4)] p-[4px]">
      <div className="bg-red-400 p-1">{children}</div>
    </div>
  );
};

export default Card;
