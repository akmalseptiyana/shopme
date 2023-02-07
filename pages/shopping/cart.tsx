import Head from "next/head";

import { CartTotals } from "@/components/cart/cart-totals";
import { ShoppingCart } from "@/components/cart/shopping-cart";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { Container } from "@/components/ui/container";

export default function Cart() {
  return (
    <Page>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Shopping Cart", href: "/shopping/cart", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="mt-32 flex flex-col gap-20 lg:flex-row">
            <ShoppingCart />
            <CartTotals />
          </InternalPageSection>
        </Container>
      </InternalPageContent>
    </Page>
  );
}
