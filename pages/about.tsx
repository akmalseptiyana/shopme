import Head from "next/head";

import { AboutStart } from "@/components/about/about-start";
import { OurClient } from "@/components/about/our-client";
import { Features } from "@/components/features";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { Container } from "@/components/ui/container";

export default function About() {
  return (
    <Page>
      <Head>
        <title>About</title>
      </Head>
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
            <h3 className="josefin-bold text-center text-3xl text-black md:text-4xl">
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
