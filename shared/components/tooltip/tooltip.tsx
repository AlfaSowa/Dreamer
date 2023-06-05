import { ReactNode, useState, useEffect, useRef, useCallback } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useWindowWidth } from "@react-hook/window-size";
import { IBaseElemet } from "../interface";

export interface IToolTip extends IBaseElemet {
  children: ReactNode;
  title: string;
}

export const ToolTip = ({ children, title }: IToolTip) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [maxTooltipWidth, setMaxTooltipWidth] = useState<number>(0);
  const windowWidth = useWindowWidth();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleRonMouseEnter = () => {
    setIsShow(true);
  };
  const handleRonMouseLeave = () => {
    setIsShow(false);
  };

  const getMaxTooltipWidth = useCallback(() => {
    if (tooltipRef?.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      setMaxTooltipWidth(windowWidth - rect.left - 20);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (tooltipRef.current) {
      getMaxTooltipWidth();
    }
  }, [getMaxTooltipWidth]);

  return (
    <div
      className="relative"
      ref={tooltipRef}
      onMouseEnter={handleRonMouseEnter}
      onMouseLeave={handleRonMouseLeave}
    >
      {children}
      {isShow && (
        <div
          style={{ maxWidth: maxTooltipWidth }}
          className="pointer-events-none inline-block left-0  z-50 absolute top-full bg-white p-2  w-max"
        >
          {title}
        </div>
      )}
    </div>
  );
};
