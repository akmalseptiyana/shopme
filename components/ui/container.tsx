import { ComponentProps, forwardRef } from "react";
import clsx from "clsx";

type ContainerProps = ComponentProps<"div">;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={clsx("container", className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);
