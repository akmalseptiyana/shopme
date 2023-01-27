import Link from "next/link";
import Head from "next/head";

import { Page } from "@/components/layout/page/page";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Container } from "@/components/ui/container";
import { Sponsor } from "@/components/sponsor";

export default function Completed() {
  return (
    <Page>
      <Head>
        <title>Order Completed</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Order Completed", href: "/completed", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="relative text-center mt-48">
            <div className="max-w-[625px] mx-auto">
              <figure className="flex justify-center">
                <svg
                  width="89"
                  height="82"
                  viewBox="0 0 89 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.541 76.8472C18.541 72.8472 8.20765 53.1806 4.04098 43.8472C-1.42121 32.8473 2.04098 28.3472 2.54098 24.8472C2.94098 22.0472 7.70765 17.0138 10.041 14.8472C12.7076 11.8472 21.541 5.04725 35.541 1.84725C53.041 -2.15275 71.541 8.84725 81.041 17.3472C88.641 24.1472 88.541 33.8472 87.541 37.8472C85.7076 43.0139 79.641 56.6472 70.041 69.8472C58.041 86.3472 36.541 81.8472 26.541 76.8472Z"
                    fill="#F6F7FA"
                    stroke="#F6F7FA"
                  />
                  <circle cx="44.5" cy="39.5" r="32.5" fill="white" />
                  <path
                    d="M22.311 46.5001L35.311 57.5001C36.7293 58.7002 38.235 57.0001 38.8105 56L43.3105 50C42.8105 50.1667 43.8105 48.2 51.8105 39C61.8105 27.5 62.8105 29 67.8105 26C69.0105 22 65.9772 21 64.3105 21C63.6439 21.3333 61.8105 22.3 59.8105 23.5C54.6105 26.7 46.6439 35.1667 43.3105 39L35.311 49C34.4775 48.1667 31.6106 45.5001 26.811 41.5001C21.611 40.7001 21.6443 44.5001 22.311 46.5001Z"
                    fill="#FF1788"
                    stroke="#FF1788"
                  />
                </svg>
              </figure>
              <h2 className="text-4xl text-[#101750] josefin-bold mt-6">
                Your Order Is Completed!
              </h2>
              <p className="text-base text-[#8D92A7] lato-regular mt-7">
                Thank you for your order! Your order is being processed and will
                be completed within 3-6 hours. You will receive an email
                confirmation when your order is completed.
              </p>
              <Link
                href="/"
                className="inline-block leading-none text-base text-white rounded-sm py-4 px-9 lato-bold bg-pink-primary mt-12"
              >
                Back To Home
              </Link>
            </div>
          </InternalPageSection>

          <Sponsor className="mt-60" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}
