import clsx from "clsx";
import { ReactNode } from "react";

type InternalPageContentProps = {
  children: ReactNode;
  className?: string;
};

export function InternalPageContent({
  children,
  className,
}: InternalPageContentProps) {
  return (
    <div className={clsx("flex flex-1 flex-col", className)}>{children}</div>
  );
}
