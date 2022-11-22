import fetch from "cross-fetch";
import { useState } from "react";

import { Page } from "../components/layout/page/page";
import { Container } from "../components/ui/container";
import { InternalPageHeader } from "../components/layout/page/internal-page-header";
import { InternalPageContent } from "../components/layout/page/internal-page-content";
import { InternalPageSection } from "../components/layout/page/internal-page-section";
import { SortBy } from "../components/sort-by";
import { Sponsor } from "../components/sponsor";
import { GridView } from "../components/products/grid-view";
import { ListView } from "../components/products/list-view";

export default function Products({ products }) {
  const [view, setView] = useState(true);

  return (
    <Page>
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
            {view ? (
              <GridView products={products} />
            ) : (
              <ListView products={products} />
            )}
          </InternalPageSection>
          <Sponsor className="mt-20" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const products = await res.json();

  return {
    props: { products },
  };
}
