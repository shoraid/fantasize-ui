import clsx from "clsx/lite";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface IconButtonProps {
  label?: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark";
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_SIZE = "sm";
const DEFAULT_COLOR = "base";

export default function IconButton(props: IconButtonProps) {
  const {
    label,
    color = DEFAULT_COLOR,
    size = DEFAULT_SIZE,
    className,
    children,
  } = props;

  const sizeStyles = styles.containerSize[size];

  const colorStyles = styles.color[color];

  const isSvgElement = (
    element: React.ReactNode,
  ): element is React.ReactElement =>
    React.isValidElement(element) && element.type === "svg";

  const applySizeToChildren = (element: React.ReactNode) => {
    if (isSvgElement(element)) {
      return React.cloneElement(element, {
        className: twMerge(styles.size[size], element.props.className),
      });
    }
    return element;
  };

  return (
    <div
      className={twMerge(styles.default, sizeStyles, colorStyles, className)}
    >
      {children ? applySizeToChildren(children) : applySizeToChildren(label)}
    </div>
  );
}

const styles = {
  default: clsx(
    "inline-block transform cursor-pointer font-medium transition-all select-none active:scale-95",
  ),
  containerSize: {
    xs: clsx("rounded-sm p-1"),
    sm: clsx("rounded-md p-2"),
    md: clsx("rounded-lg p-3"),
    lg: clsx("rounded-xl p-4"),
    xl: clsx("rounded-xl p-6"),
  },
  size: {
    xs: clsx("h-4 w-4"),
    sm: clsx("h-5 w-5"),
    md: clsx("h-6 w-6"),
    lg: clsx("h-8 w-8"),
    xl: clsx("h-10 w-10"),
  },
  color: {
    base: clsx("bg-transparent hover:bg-slate-100"),
    primary: clsx("bg-blue-400 hover:bg-blue-500"),
    secondary: clsx("bg-indigo-400 text-slate-50 hover:bg-indigo-500"),
    tertiary: clsx("bg-indigo-200 hover:bg-indigo-300"),
    info: clsx("bg-cyan-400 hover:bg-cyan-500"),
    success: clsx("bg-green-400 hover:bg-green-500"),
    warning: clsx("bg-yellow-400 hover:bg-yellow-500"),
    error: clsx("bg-red-400 hover:bg-red-500"),
    light: clsx("bg-white"),
    dark: clsx("bg-black text-white"),
  },
};
