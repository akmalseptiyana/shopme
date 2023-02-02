import "@/styles/globals.css";
import "nprogress/nprogress.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import NProgress from "nprogress";

import { Layout } from "@/components/layout";
import { wrapper } from "@/store/store";

export const progress = NProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps, router, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);

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
  }, [router.events]);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
