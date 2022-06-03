import clsx from "clsx";
import { FC, useCallback } from "react";
import { IButton } from "./button";

type IButtonIcon = IButton;

export const ButtonIcon: FC<IButtonIcon> = ({
  onClick,
  children,
  size = "normal",
}) => {
  return (
    <button
      className={clsx(
        "border",
        size === "small" && "w-6 h-6",
        size === "normal" && "w-8 h-8",
        size === "big" && "w-10 h-10",
        "border-sky-500"
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
