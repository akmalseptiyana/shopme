import { Page } from "../../../components/layout/page/page";
import { InternalPageHeader } from "../../../components/layout/page/internal-page-header";
import { InternalPageContent } from "../../../components/layout/page/internal-page-content";
import { InternalPageSection } from "../../../components/layout/page/internal-page-section";
import { Container } from "../../../components/ui/container";
import { Sponsor } from "../../../components/sponsor";
import { CardProductDetails } from "../../../components/details/card-product-details";
import { RelatedProducts } from "../../../components/details/related-products";
import fetch from "cross-fetch";

export default function ProductDetails({ data }) {
  return (
    <Page>
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

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`${process.env.BASE_URL}/products/${id}`);
  const data = await res.json();

  return { props: { data } };
}
