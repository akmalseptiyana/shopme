import { ReactNode } from "react";
import clsx from "clsx";

type InternalPageContentProps = {
  children: ReactNode;
  className?: string;
};

export function InternalPageContent({
  children,
  className,
}: InternalPageContentProps) {
  return (
    <div className={clsx("flex flex-col flex-1", className)}>{children}</div>
  );
}
