import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import { BlogAside } from "@/components/blog/blog-aside";
import { Single } from "@/components/blog/single";
import { InternalPageContent } from "@/components/layout/page/internal-page-content";
import { InternalPageHeader } from "@/components/layout/page/internal-page-header";
import { InternalPageSection } from "@/components/layout/page/internal-page-section";
import { Page } from "@/components/layout/page/page";
import { Sponsor } from "@/components/sponsor";
import { Container } from "@/components/ui/container";

export default function SingleBlog({
  data,
  recentPost,
  saleProduct,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <Head>
        <title>Single Blog</title>
      </Head>
      <InternalPageHeader
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Blog Page", href: "/blog" },
          { name: "Single Blog", href: "/blog/single", current: true },
        ]}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="flex flex-wrap gap-x-8 gap-y-20 mt-28">
            <Single data={data} />
            <BlogAside data={{ recentPost, saleProduct }} />
          </InternalPageSection>

          <Sponsor className="mt-28" />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BLOG_URL}/everything?apiKey=${process.env.API_KEY}&q=apple&language=en&pageSize=1`
  );

  const resRecentPost = await fetch(
    `${process.env.BLOG_URL}/everything?apiKey=${process.env.API_KEY}&q=nvidia&language=en&pageSize=4`
  );

  const resSaleProduct = await fetch(
    `${process.env.BLOG_URL}/everything?apiKey=${process.env.API_KEY}&q=sale product&language=en&pageSize=3`
  );

  const data = await res.json();
  const recentPost = await resRecentPost.json();
  const saleProduct = await resSaleProduct.json();

  return { props: { data, recentPost, saleProduct } };
}
