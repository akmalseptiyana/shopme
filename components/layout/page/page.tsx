import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

export function Page({ children }: PageProps) {
  return <section className="flex flex-col flex-1">{children}</section>;
}
