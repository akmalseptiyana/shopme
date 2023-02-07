import fetch from "cross-fetch";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { CardProductDetails } from "@/components/details/card-product-details";
import { RelatedProducts } from "@/components/details/related-products";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { Sponsor } from "@/components/sponsor";
import { Container } from "@/components/ui/container";

export default function ProductDetails({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page>
      <Head>
        <title>Product Details</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Product Details", href: "", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="mt-32">
            <CardProductDetails data={data} />
            <RelatedProducts data={data} />
          </InternalPageSection>

          <Sponsor className="mt-32" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;

  const res = await fetch(`${process.env.BASE_URL}/products/${id}`);
  const data = await res.json();

  return { props: { data } };
};
