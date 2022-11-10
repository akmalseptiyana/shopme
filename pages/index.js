import fetch from "cross-fetch";

import { Page } from "../components/layout/page/page";
import { HomePageStart } from "../components/home/homepage-start";
import { HomePageContent } from "../components/home/homepage-content";
import { HomePageFeaturedProduct } from "../components/home/homepage-featured-product";
import { HomePageLatestProduct } from "../components/home/homepage-latest-product";

export default function Home({ featuredProducts, latestProducts }) {
  return (
    <Page>
      <HomePageContent>
        <HomePageStart />
        <HomePageFeaturedProduct featuredProducts={featuredProducts} />
        <HomePageLatestProduct latestProducts={latestProducts} />
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

  return {
    props: { featuredProducts, latestProducts },
  };
}
