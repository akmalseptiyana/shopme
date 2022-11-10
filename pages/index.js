import fetch from "cross-fetch";

import { Page } from "../components/layout/page/page";
import { HomePageStart } from "../components/home/homepage-start";
import { HomePageContent } from "../components/home/homepage-content";
import { HomePageFeaturedProduct } from "../components/home/homepage-featured-product";
import { HomePageLatestProduct } from "../components/home/homepage-latest-product";
import { HomePageOffer } from "../components/home/homepage-offer";
import { HomePageUnique } from "../components/home/homepage-unique";
import { HomePageTrendingProducts } from "../components/home/homepage-trending-product";

export default function Home({
  featuredProducts,
  latestProducts,
  trendingProducts,
}) {
  return (
    <Page>
      <HomePageContent>
        <HomePageStart />
        <HomePageFeaturedProduct featuredProducts={featuredProducts} />
        <HomePageLatestProduct latestProducts={latestProducts} />
        <HomePageOffer />
        <HomePageUnique />
        <HomePageTrendingProducts trendingProducts={trendingProducts} />
      </HomePageContent>
    </Page>
  );
}

export async function getServerSideProps() {
  const resFeaturedProducts = await fetch(
    `${process.env.BASE_URL}/products?limit=4`
  );
  const featuredProducts = await resFeaturedProducts.json();

  const resLatestProducts = await fetch(
    `${process.env.BASE_URL}/products?sort=desc&limit=6`
  );
  const latestProducts = await resLatestProducts.json();

  const resTrendingProducts = await fetch(`${process.env.BASE_URL}/products`);
  const trendingProducts = await resTrendingProducts.json();

  return {
    props: { featuredProducts, latestProducts, trendingProducts },
  };
}
