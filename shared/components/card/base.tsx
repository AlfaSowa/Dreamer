import { ReactNode } from "react";

interface IBaseCard {
  children: ReactNode;
  onClick?: () => void;
}

export const BaseCard = ({ children, onClick }: IBaseCard) => {
  return (
    <div
      className={`p-1 min-h-[60px]${
        onClick ? " cursor-pointer" : ""
      } rounded border-dashed border border-red-400`}
      {...(onClick && { onClick })}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

BaseCard.defaultProps = {
  onClick: null,
};
