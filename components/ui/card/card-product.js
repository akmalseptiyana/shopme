export function CardProduct({ children, className, ...rest }) {
  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
}
