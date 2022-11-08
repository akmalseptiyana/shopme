import clsx from "clsx";

export function Container({ children, className, ref, ...rest }) {
  return (
    <div className={clsx("container", className)} ref={ref} {...rest}>
      {children}
    </div>
  );
}
