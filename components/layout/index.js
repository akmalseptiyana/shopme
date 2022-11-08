import { GlobalHeader } from "./global-header";
import { Navigation } from "./navigation";

export function Layout({ children }) {
  return (
    <>
      <GlobalHeader />
      <Navigation />
      <main>{children}</main>
    </>
  );
}
