import clsx from "clsx";
import { createElement, ReactNode } from "react";

interface ITypography {
  component?: "span" | "p" | "h1" | "h5";
  className?: string;
  children: ReactNode;
}

const Typography = ({ children, component, className }: ITypography) => {
  return createElement(
    component,
    { ...(className && { className }) },
    children
  );
};

Typography.defaultProps = {
  component: "span",
  className: null,
};

export default Typography;
