import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

type ContainerProps = ComponentProps<"div">;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={clsx("container", className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
