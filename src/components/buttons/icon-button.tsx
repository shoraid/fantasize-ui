import clsx from "clsx/lite";
import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
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
}

const DEFAULT_SIZE = "sm";
const DEFAULT_COLOR = "base";

const IconButton = forwardRef(
  (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      label,
      color = DEFAULT_COLOR,
      size = DEFAULT_SIZE,
      className,
      children,
      ...rest
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
      <button
        ref={ref}
        className={twMerge(styles.default, sizeStyles, colorStyles, className)}
        {...rest}
      >
        {children ? applySizeToChildren(children) : applySizeToChildren(label)}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;

const styles = {
  default: clsx(
    "inline-flex transform cursor-pointer items-center justify-center font-medium transition-all select-none",
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
    base: clsx("bg-transparent hover:bg-slate-100 active:bg-transparent"),
    primary: clsx("bg-blue-400 hover:bg-blue-500 active:bg-blue-400"),
    secondary: clsx(
      "bg-indigo-400 text-slate-50 hover:bg-indigo-500 active:bg-indigo-400",
    ),
    tertiary: clsx("bg-fuchsia-400 hover:bg-fuchsia-500 active:bg-fuchsia-400"),
    info: clsx("bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-400"),
    success: clsx("bg-green-400 hover:bg-green-500 active:bg-green-400"),
    warning: clsx("bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-400"),
    error: clsx("bg-red-400 hover:bg-red-500 active:bg-red-400"),
    light: clsx("bg-white"),
    dark: clsx("bg-black text-white hover:bg-black/80 active:bg-black"),
  },
};
