import { ReactNode, useCallback } from "react";

interface IBaseCard {
  children: ReactNode;
  onClick?: () => void;
}

export const BaseCard = ({ children, onClick }: IBaseCard) => {
  return (
    <div className="flex-[0_0_calc(100%/4)] p-1">
      <div
        className="bg-red-400 p-1 min-h-[60px]"
        aria-hidden="true"
        {...(onClick && { onClick })}
      >
        {children}
      </div>
    </div>
  );
};

BaseCard.defaultProps = {
  onClick: null,
};
