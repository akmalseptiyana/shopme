import { ReactNode } from "react";

import { GlobalHeader } from "./global-header";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

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
