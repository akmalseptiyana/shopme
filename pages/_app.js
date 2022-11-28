import "../styles/globals.css";
import "nprogress/nprogress.css";

import { useEffect } from "react";

import NProgress from "nprogress";
import { Layout } from "../components/layout";
import { CartProvider } from "../lib/hooks/cart-context";

export const progress = NProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleStart = () => {
      progress.start();
    };
    const handleStop = () => {
      progress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
