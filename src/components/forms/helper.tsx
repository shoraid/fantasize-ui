import { clsx } from "clsx/lite";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface HelperProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "xs" | "sm" | "md" | "lg";
  color?: "base" | "success" | "error";
}

const DEFAULT_SIZE = "sm";
const DEFAULT_COLOR = "base";

const Helper = forwardRef(
  (props: HelperProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const {
      size = DEFAULT_SIZE,
      color = DEFAULT_COLOR,
      className,
      ...rest
    } = props;

    const sizeStyle = styles.size[size];
    const colorStyle = styles.color[color];

    return (
      <span
        ref={ref}
        className={twMerge(styles.default, sizeStyle, colorStyle, className)}
        {...rest}
      />
    );
  },
);

Helper.displayName = "Helper";

export default Helper;

const styles = {
  default: clsx("text-slate-900"),
  size: {
    xs: clsx("text-xs"),
    sm: clsx("text-sm"),
    md: clsx("text-base"),
    lg: clsx("text-lg"),
  },
  color: {
    base: clsx("text-slate-900"),
    success: clsx("text-green-600"),
    error: clsx("text-red-600"),
  },
};
