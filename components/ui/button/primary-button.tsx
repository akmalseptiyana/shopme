import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  className: string;
  color?: string;
  type: "button" | "submit";
  icon?: HTMLOrSVGElement;
  iconPosition?: "left" | "right";
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color = "bg-pink-primary",
      type,
      icon,
      iconPosition = "left",
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={clsx(
          "leading-none text-base text-white rounded-sm",
          color,
          className
        )}
        type={type}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
