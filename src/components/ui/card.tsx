import clsx from "clsx/lite";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef(
  (props: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={twMerge(styles.card.default, className)}
        {...rest}
      />
    );
  },
);

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef(
  (props: CardHeaderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={twMerge(styles.cardHeader.default, className)}
        {...rest}
      />
    );
  },
);

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

const CardBody = forwardRef(
  (props: CardBodyProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={twMerge(styles.cardBody.default, className)}
        {...rest}
      />
    );
  },
);

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef(
  (props: CardFooterProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={twMerge(styles.cardFooter.default, className)}
        {...rest}
      />
    );
  },
);

export default Card;

export { Card, CardHeader, CardBody, CardFooter };

const styles = {
  card: {
    default: clsx("rounded-lg border border-slate-300 shadow-sm"),
  },
  cardBody: {
    default: clsx("p-4"),
  },
  cardHeader: {
    default: clsx("border-b border-b-slate-200 p-4"),
  },
  cardFooter: {
    default: clsx("border-t border-t-slate-200 p-4"),
  },
};
