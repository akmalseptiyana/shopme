import { ReactNode } from "react";
import clsx from "clsx";

type FormGroupProps = {
  children: ReactNode;
  className?: string;
};

export function FormGroup({ children, className }: FormGroupProps) {
  return <div className={clsx("flex", className)}>{children}</div>;
}
