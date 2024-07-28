import { clsx } from "clsx/lite";
import { ForwardedRef, forwardRef, LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: "xs" | "sm" | "md" | "lg";
  required?: boolean;
}

const DEFAULT_SIZE = "sm";

const Label = forwardRef(
  (props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const {
      size = DEFAULT_SIZE,
      required,
      children,
      className,
      ...rest
    } = props;

    const sizeStyle = styles.size[size];

    return (
      <label
        ref={ref}
        className={twMerge(styles.default, sizeStyle, className)}
        {...rest}
      >
        {children} {required ? <span className={styles.required}>*</span> : ""}
      </label>
    );
  },
);

export default Label;

const styles = {
  default: clsx("font-medium text-slate-900"),
  required: clsx("text-red-500"),
  size: {
    xs: clsx("text-xs"),
    sm: clsx("text-sm"),
    md: clsx("text-base"),
    lg: clsx("text-lg"),
  },
};
