import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { Sponsor } from "@/components/sponsor";
import { Container } from "@/components/ui/container";

import image404 from "@/public/assets/images/404.svg";

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
              className="josefin-regular mt-10 rounded-[3px] bg-pink-primary py-3 px-8 text-base text-white md:mt-0"
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
