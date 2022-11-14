import clsx from "clsx";

export function FormGroup({ children, className }) {
  return <div className={clsx("flex", className)}>{children}</div>;
}
