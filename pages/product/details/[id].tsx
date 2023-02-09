import Head from "next/head";

import { CardProductDetails } from "@/components/details/card-product-details";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { ProductItem } from "@/components/products/utils/type";
import { Sponsor } from "@/components/sponsor";
import { Container } from "@/components/ui/container";

import {
  getProductDetails,
  getProducts,
  getRunningQueriesThunk,
} from "@/store/services/fakeStore";
import { store, wrapper } from "@/store/store";

export default function ProductDetails() {
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
            <CardProductDetails />
            {/* <RelatedProducts /> */}
          </InternalPageSection>

          <Sponsor className="mt-32" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params?.id as string;

    store.dispatch(getProductDetails.initiate(id));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);
