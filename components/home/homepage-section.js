import { Container } from "../ui/container";

export function HomepageSection({ children, className, title }) {
  return (
    <section className={className}>
      <Container>
        {title && (
          <h2 className="text-3xl md:text-4xl text-[#1A0B5B] josefin-bold text-center">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}
