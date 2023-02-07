import { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type HomepageSectionProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export function HomepageSection({
  children,
  className,
  title,
}: HomepageSectionProps) {
  return (
    <section className={className}>
      <Container>
        {title && (
          <h2 className="josefin-bold text-center text-3xl text-[#1A0B5B] md:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}
