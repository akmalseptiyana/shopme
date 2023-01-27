import Head from "next/head";

import { Page } from "@/components/layout/page/page";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Container } from "@/components/ui/container";
import { ShoppingCart } from "@/components/cart/shopping-cart";
import { CartTotals } from "@/components/cart/cart-totals";

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
          <InternalPageSection className="flex flex-col lg:flex-row gap-20 mt-32">
            <ShoppingCart />
            <CartTotals />
          </InternalPageSection>
        </Container>
      </InternalPageContent>
    </Page>
  );
}
