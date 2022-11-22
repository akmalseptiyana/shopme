import { Page } from "../components/layout/page/page";
import { InternalPageHeader } from "../components/layout/page/internal-page-header";
import { InternalPageContent } from "../components/layout/page/internal-page-content";
import { InternalPageSection } from "../components/layout/page/internal-page-section";
import { Container } from "../components/ui/container";
import { AboutStart } from "../components/about/about-start";
import { Features } from "../components/features";
import { OurClient } from "../components/about/our-client";

export default function About() {
  return (
    <Page>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="mt-28">
            <AboutStart />
          </InternalPageSection>
          <InternalPageSection className="mt-36">
            <h3 className="text-3xl md:text-4xl text-black josefin-bold text-center">
              Our Features
            </h3>
            <Features />
          </InternalPageSection>
          <InternalPageSection className="mt-52">
            <OurClient />
          </InternalPageSection>
        </Container>
      </InternalPageContent>
    </Page>
  );
}
