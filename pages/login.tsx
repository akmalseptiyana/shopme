import Head from "next/head";

import { Page } from "@/components/layout/page/page";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Container } from "@/components/ui/container";
import { Sponsor } from "@/components/sponsor";
import { LoginForm } from "@/components/login/login-form";

export default function Login() {
  return (
    <Page>
      <Head>
        <title>Login</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "My Account", href: "/login", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="flex justify-center mt-32">
            <LoginForm />
          </InternalPageSection>

          <Sponsor className="mt-28" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}
