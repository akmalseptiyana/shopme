import Head from "next/head";

import { InternalPageContent } from "../components/layout/page/internal-page-content";
import { InternalPageHeader } from "../components/layout/page/internal-page-header";
import { InternalPageSection } from "../components/layout/page/internal-page-section";
import { Page } from "../components/layout/page/page";
import { Container } from "../components/ui/container";
import { ContactStart } from "../components/contact/contact-start";
import { ContactForm } from "../components/contact/contact-form";

export default function Contact() {
  return (
    <Page>
      <Head>
        <title>Contact</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contact", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="mt-32">
            <ContactStart />
            <ContactForm />
          </InternalPageSection>
        </Container>
      </InternalPageContent>
    </Page>
  );
}
