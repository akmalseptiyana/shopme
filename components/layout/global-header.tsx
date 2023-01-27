import clsx from "clsx";
import Link from "next/link";

import { dataLeft, dataRight } from "@/constans/header-data";
import { Container } from "@/components/ui/container";
import { useCart } from "@/lib/hooks/cart-context";

export function GlobalHeader() {
  const { state } = useCart();

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

          <Link href="/shopping/cart" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[30px] h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
              <g
                className={clsx(
                  "text-pink-primary",
                  Object.keys(state.cart).length > 0 ? "block" : "hidden"
                )}
              >
                <circle cx="22" cy="5" r="4" className="dot" fill="#FB2E86" />
              </g>
            </svg>
          </Link>
        </div>
      </Container>
    </header>
  );
}
