import clsx from "clsx";
import { createElement, FC } from "react";

interface ITypography {
  component?: "span" | "p" | "h1" | "h5";
  className?: string;
}

const Typography: FC<ITypography> = ({ children, component, className }) => {
  return createElement(
    component,
    {
      className: clsx({ [className]: className }),
    },
    children
  );
};

Typography.defaultProps = {
  component: "span",
  className: null,
};

export default Typography;
