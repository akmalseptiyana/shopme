import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { dataLeft, dataRight } from "../../constans/header-data";
import { Container } from "../ui/container";

export function GlobalHeader() {
  return (
    <header className="bg-purple-primary py-[14px]">
      <Container className="flex flex-wrap items-center justify-center md:justify-between gap-y-4">
        <div className="flex items-center gap-x-12">
          {dataLeft.map((data, index) => {
            return (
              <div key={index} className="flex items-center gap-x-3">
                <data.icon className="w-4 h-4 text-white" />
                <p className="text-base text-[#F1F1F1] josefin-semibold">
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-6">
          <ul className="flex items-center gap-x-4">
            {dataRight.map((data, index) => {
              if (data.href) {
                return (
                  <li key={index} className="flex items-center gap-x-1">
                    <Link
                      href={data.href}
                      className="flex items-center gap-x-1 text-base text-[#F1F1F1] josefin-semibold"
                    >
                      {data.text}
                      <data.icon className="w-4 h-4 text-white" />
                    </Link>
                  </li>
                );
              }

              return (
                <li key={index} className="flex items-center gap-x-1">
                  <p className="text-base text-[#F1F1F1] josefin-semibold">
                    {data.text}
                  </p>
                  <data.icon className="w-4 h-4 text-white" />
                </li>
              );
            })}
          </ul>

          <Link href="/shopping/cart">
            <ShoppingCartIcon className="w-6 h-6 text-white" />
          </Link>
        </div>
      </Container>
    </header>
  );
}
