import clsx from "clsx/lite";
import { ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
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

const BaseInput = forwardRef(
  (props: BaseInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      type = "text",
      id,
      name,
      size = DEFAULT_SIZE,
      color = DEFAULT_COLOR,
      className,
      ...rest
    } = props;

    const sizeStyle = styles.size[size];
    const colorStyle = styles.color[color];

    return (
      <input
        ref={ref}
        type={type}
        id={id ?? name}
        className={twMerge(styles.default, sizeStyle, colorStyle, className)}
        {...rest}
      />
    );
  },
);

export default BaseInput;

const styles = {
  default: clsx(
    "my-1 block w-full border shadow-sm focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  ),
  size: {
    xs: clsx("rounded py-1 px-2 text-xs"),
    sm: clsx("rounded-md py-1.5 px-3 text-sm"),
    md: clsx("rounded-lg py-2 px-4 text-base"),
    lg: clsx("rounded-xl py-3 px-6 text-lg"),
  },
  color: {
    base: clsx("border-slate-400 focus:ring-slate-200"),
    primary: clsx("border-blue-400 focus:ring-blue-200"),
    secondary: clsx("border-indigo-400 focus:ring-indigo-200"),
    tertiary: clsx("border-fuchsia-400 focus:ring-fuchsia-200"),
    info: clsx("border-cyan-400 focus:ring-cyan-200"),
    success: clsx("border-green-400 focus:ring-green-200"),
    warning: clsx("border-yellow-400 focus:ring-yellow-200"),
    error: clsx("border-red-400 focus:ring-red-200"),
    light: clsx("border-white focus:ring-white"),
    dark: clsx("border-black focus:ring-black"),
  },
};
