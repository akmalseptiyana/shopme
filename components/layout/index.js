import { GlobalHeader } from "./global-header";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function Layout({ children }) {
  return (
    <>
      <GlobalHeader />
      <Navigation />
      <main className="bg-white">{children}</main>
      <Footer />
    </>
  );
}
