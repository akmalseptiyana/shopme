import Head from "next/head";
import { useState } from "react";

import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { GridView } from "@/components/products/grid-view";
import { ListView } from "@/components/products/list-view";
import { SortBy } from "@/components/sort-by";
import { Sponsor } from "@/components/sponsor";
import { Container } from "@/components/ui/container";

import { getProducts } from "@/store/services/fakeStore";
import { getRunningQueriesThunk } from "@/store/services/fakeStore";
import { wrapper } from "@/store/store";

export default function Products() {
  const [view, setView] = useState<boolean>(true);

  return (
    <Page>
      <Head>
        <title>Products</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="mt-32">
            <SortBy view={view} setView={setView} />
            {view ? <GridView /> : <ListView />}
          </InternalPageSection>
          <Sponsor className="mt-20" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getProducts.initiate());
  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
