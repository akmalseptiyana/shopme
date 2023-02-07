import fetch from "cross-fetch";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { HomePageCategories } from "@/components/home/homepage-categories";
import { HomePageContent } from "@/components/home/homepage-content";
import { HomePageDiscount } from "@/components/home/homepage-discount";
import { HomePageFeaturedProduct } from "@/components/home/homepage-featured-product";
import { HomePageLatestProduct } from "@/components/home/homepage-latest-product";
import { HomePageLeatestBlog } from "@/components/home/homepage-leatest-blog";
import { HomePageNewslater } from "@/components/home/homepage-newslater";
import { HomePageOffer } from "@/components/home/homepage-offer";
import { HomePageStart } from "@/components/home/homepage-start";
import { HomePageTrendingProducts } from "@/components/home/homepage-trending-product";
import { HomePageUnique } from "@/components/home/homepage-unique";
import { Page } from "@/components/layout/page/page";
import { Sponsor } from "@/components/sponsor";

export default function Home({
  featuredProducts,
  latestProducts,
  trendingProducts,
  topCategories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <Head>
        <title>Home</title>
      </Head>
      <HomePageContent>
        <HomePageStart />
        <HomePageFeaturedProduct featuredProducts={featuredProducts} />
        <HomePageLatestProduct latestProducts={latestProducts} />
        <HomePageOffer />
        <HomePageUnique />
        <HomePageTrendingProducts trendingProducts={trendingProducts} />
        <HomePageDiscount />
        <HomePageCategories topCategories={topCategories} />
        <HomePageNewslater />
        <Sponsor className="mt-24" />
        <HomePageLeatestBlog />
      </HomePageContent>
    </Page>
  );
}

export async function getStaticProps() {
  const resFeaturedProducts = await fetch(
    `${process.env.BASE_URL}/products?limit=4`,
  );
  const featuredProducts = await resFeaturedProducts.json();

  const resLatestProducts = await fetch(
    `${process.env.BASE_URL}/products?sort=desc&limit=6`,
  );
  const latestProducts = await resLatestProducts.json();

  const resTrendingProducts = await fetch(`${process.env.BASE_URL}/products`);
  const trendingProducts = await resTrendingProducts.json();

  const resTopCategories = await fetch(
    `${process.env.BASE_URL}/products/category/electronics`,
  );
  const topCategories = await resTopCategories.json();

  return {
    props: {
      featuredProducts,
      latestProducts,
      trendingProducts,
      topCategories,
    },
  };
}
