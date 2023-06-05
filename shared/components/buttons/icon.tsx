import clsx from "clsx";
import { IButton } from "./button";

type IButtonIcon = IButton;

enum BUTTON_SIZE {
  small = "w-6 h-6",
  normal = "w-8 h-8",
  big = "w-10 h-10",
}

export const ButtonIcon = ({
  onClick,
  children,
  size = "normal",
}: IButtonIcon) => {
  return (
    <button
      className={clsx("border", BUTTON_SIZE[size], "border-sky-500")}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
