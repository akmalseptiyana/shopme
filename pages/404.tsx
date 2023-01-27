import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import image404 from "@/public/assets/images/404.svg";

import { Page } from "@/components/layout/page/page";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Container } from "@/components/ui/container";
import { Sponsor } from "@/components/sponsor";

export default function Custom404() {
  return (
    <Page>
      <Head>
        <title>Not Found</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "404 Not Found", href: "", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="flex flex-col items-center">
            <figure>
              <Image src={image404} alt="404 image" priority />
            </figure>
            <Link
              href="/"
              className="text-base text-white josefin-regular py-3 px-8 bg-pink-primary rounded-[3px] mt-10 md:mt-0"
            >
              Back To Home
            </Link>
          </InternalPageSection>

          <Sponsor className="mt-32" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}
