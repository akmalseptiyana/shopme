import { CardProps } from "./utils/type";

export function CardAction({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}
