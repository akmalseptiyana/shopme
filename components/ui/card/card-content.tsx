import { CardProps } from "./utils/type";

export function CardContent({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}
