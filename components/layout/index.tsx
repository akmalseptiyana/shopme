import { ReactNode } from "react";

import { Footer } from "./footer";
import { GlobalHeader } from "./global-header";
import { Navigation } from "./navigation";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalHeader />
      <Navigation />
      <main className="bg-white">{children}</main>
      <Footer />
    </>
  );
}
