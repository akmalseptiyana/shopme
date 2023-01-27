import { CardProps } from "./utils/type";

export function CardProduct({ children, className, ...rest }: CardProps) {
  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
}
