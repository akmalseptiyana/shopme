import { ReactNode } from "react";

type InternalPageSectionProps = {
  children: ReactNode;
  className?: string;
};

export function InternalPageSection({
  children,
  className,
}: InternalPageSectionProps) {
  return <div className={className}>{children}</div>;
}
