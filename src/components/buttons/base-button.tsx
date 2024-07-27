import clsx from "clsx/lite";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface BaseButtonProps {
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

const DEFAULT_SIZE = "md";
const DEFAULT_COLOR = "base";

export default function BaseButton(props: BaseButtonProps) {
  const {
    label,
    color = DEFAULT_COLOR,
    size = DEFAULT_SIZE,
    className,
    children,
  } = props;

  const sizeStyles = styles.size[size];

  const colorStyles = styles.color[color];

  return (
    <div
      className={twMerge(styles.default, sizeStyles, colorStyles, className)}
    >
      {children ?? label}
    </div>
  );
}

const styles = {
  default: clsx(
    "inline-block transform cursor-pointer select-none font-medium transition active:scale-95",
  ),
  size: {
    xs: clsx("rounded-sm px-2 py-1 text-xs"),
    sm: clsx("rounded-md px-3 py-1.5 text-sm"),
    md: clsx("rounded-lg px-4 py-2 text-base"),
    lg: clsx("rounded-xl px-6 py-3 text-lg"),
    xl: clsx("rounded-xl px-10 py-5 text-xl"),
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
