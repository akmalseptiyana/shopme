import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

type ButtonProps = {
  className: string;
  color?: string;
  type: "button" | "submit";
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color = "bg-pink-primary", type, children, ...rest }, ref) => {
    return (
      <button
        className={clsx(
          "rounded-sm text-base leading-none text-white",
          color,
          className,
        )}
        type={type}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

PrimaryButton.displayName = "PrimaryButton";
