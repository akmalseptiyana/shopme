import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";

import { Container } from "@/components/ui/container";

import { RootState } from "@/store/store";

import { dataLeft, dataRight } from "@/constans/header-data";

export function GlobalHeader() {
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  );

  return (
    <header className="bg-purple-primary py-[14px]">
      <Container className="flex flex-wrap items-center justify-center gap-y-4 md:justify-between">
        <div className="flex items-center gap-x-12">
          {dataLeft.map((data, index) => {
            return (
              <div key={index} className="flex items-center gap-x-3">
                <data.icon className="h-4 w-4 text-white" />
                <p className="josefin-semibold text-base text-[#F1F1F1]">
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
                      className="josefin-semibold flex items-center gap-x-1 text-base text-[#F1F1F1]"
                    >
                      {data.text}
                      <data.icon className="h-4 w-4 text-white" />
                    </Link>
                  </li>
                );
              }

              return (
                <li key={index} className="flex items-center gap-x-1">
                  <p className="josefin-semibold text-base text-[#F1F1F1]">
                    {data.text}
                  </p>
                  <data.icon className="h-4 w-4 text-white" />
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
              className="h-6 w-[30px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
              <g
                className={clsx(
                  "text-pink-primary",
                  cartItems.length > 0 ? "block" : "hidden",
                )}
              >
                <circle cx="22" cy="8" r="7" fill="#FB2E86" />
                <text
                  x={totalQuantity < 10 ? "62%" : "52%"}
                  y="50%"
                  strokeWidth="1px"
                  className="font-lato text-[10px] text-white"
                >
                  {totalQuantity}
                </text>
              </g>
            </svg>
          </Link>
        </div>
      </Container>
    </header>
  );
}
