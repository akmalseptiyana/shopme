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
          <h2 className="text-3xl md:text-4xl text-[#1A0B5B] josefin-bold text-center">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}
