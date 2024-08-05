import clsx from "clsx/lite";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark";
}

const DEFAULT_SIZE = "md";
const DEFAULT_COLOR = "base";

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      label,
      color = DEFAULT_COLOR,
      size = DEFAULT_SIZE,
      className,
      children,
      ...rest
    } = props;

    const sizeStyles = styles.size[size];

    const colorStyles = styles.color[color];

    return (
      <button
        ref={ref}
        className={twMerge(styles.default, sizeStyles, colorStyles, className)}
        {...rest}
      >
        {children ?? label}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

const styles = {
  default: clsx(
    "inline-flex transform cursor-pointer items-center justify-center gap-x-1 font-medium text-gray-900 transition select-none",
  ),
  size: {
    xs: clsx("rounded-sm py-1 px-2 text-xs"),
    sm: clsx("rounded-md py-1.5 px-3 text-sm"),
    md: clsx("rounded-lg py-2 px-4 text-base"),
    lg: clsx("rounded-xl py-3 px-6 text-lg"),
    xl: clsx("rounded-xl py-5 px-10 text-xl"),
  },
  color: {
    base: clsx("bg-transparent hover:bg-slate-100 active:bg-transparent"),
    primary: clsx("bg-blue-400 hover:bg-blue-500 active:bg-blue-400"),
    secondary: clsx(
      "bg-indigo-400 text-slate-50 hover:bg-indigo-500 active:bg-indigo-400",
    ),
    tertiary: clsx(
      "bg-fuchsia-400 hover:bg-fuchsia-600/80 active:bg-fuchsia-400",
    ),
    success: clsx("bg-green-400 hover:bg-green-500 active:bg-green-400"),
    warning: clsx("bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-400"),
    error: clsx("bg-red-400 hover:bg-red-500 active:bg-red-400"),
    light: clsx("bg-white"),
    dark: clsx("bg-black text-white hover:bg-black/80 active:bg-black"),
  },
};
