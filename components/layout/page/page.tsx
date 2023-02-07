import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

export function Page({ children }: PageProps) {
  return <section className="flex flex-1 flex-col">{children}</section>;
}
