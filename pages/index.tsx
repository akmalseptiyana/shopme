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

import {
  getProducts,
  getProductsByCategory,
  getProductsLimit,
  getRunningQueriesThunk,
} from "@/store/services/fakeStore";
import { wrapper } from "@/store/store";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Home</title>
      </Head>
      <HomePageContent>
        <HomePageStart />
        <HomePageFeaturedProduct />
        <HomePageLatestProduct />
        <HomePageOffer />
        <HomePageUnique />
        <HomePageTrendingProducts />
        <HomePageDiscount />
        <HomePageCategories />
        <HomePageNewslater />
        <Sponsor className="mt-24" />
        <HomePageLeatestBlog />
      </HomePageContent>
    </Page>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getProducts.initiate("getProducts"));
  store.dispatch(getProductsLimit.initiate("getProductsWithLimit"));
  store.dispatch(getProductsByCategory.initiate("getProductsByCategory"));

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
