import Head from "next/head";

import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { LoginForm } from "@/components/login/login-form";
import { Sponsor } from "@/components/sponsor";
import { Container } from "@/components/ui/container";

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
          <InternalPageSection className="mt-32 flex justify-center">
            <LoginForm />
          </InternalPageSection>

          <Sponsor className="mt-28" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}
