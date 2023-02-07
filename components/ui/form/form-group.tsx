import clsx from "clsx";
import { ReactNode } from "react";

type FormGroupProps = {
  children: ReactNode;
  className?: string;
};

export function FormGroup({ children, className }: FormGroupProps) {
  return <div className={clsx("flex", className)}>{children}</div>;
}
