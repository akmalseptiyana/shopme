import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import backpack from "@/public/assets/images/backpack.png";

import { HomepageSection } from "@/components/home/homepage-section";

export function HomePageDiscount() {
  return (
    <HomepageSection title="Discount Item" className="mt-32">
      <ul className="mt-8 flex items-center justify-center gap-x-6">
        <li>
          <button
            type="button"
            className="lato-regular text-base text-navy-blue underline md:text-lg"
          >
            Brown Backpack
          </button>
        </li>
        <li>
          <button
            type="button"
            className="lato-regular text-base text-navy-blue md:text-lg"
          >
            Smartwatch
          </button>
        </li>
        <li>
          <button
            type="button"
            className="lato-regular text-base text-navy-blue md:text-lg"
          >
            T-shirt
          </button>
        </li>
      </ul>
      <div className="relative flex flex-wrap items-end justify-center gap-x-20 xl:-top-32">
        <div className="mt-10">
          <h3 className="josefin-bold text-3xl text-navy-blue md:text-4xl">
            20% Discount Of All Products
          </h3>
          <p className="josefin-regular mt-4 text-xl text-pink-primary">
            Brown Backpack
          </p>
          <p className="lato-regular mt-5 max-w-[523px] text-base text-[#B7BACB]">
            With multiple compartments, pockets, and compartments, this backpack
            has plenty of room for all of your belongings, from your laptop and
            books to your water bottle and snacks. The padded shoulder straps
            and back panel ensure a comfortable and ergonomic fit, while the
            sturdy materials and construction make it durable.
          </p>
          <ul className="mt-7 flex max-w-[510px] flex-wrap gap-x-11 gap-y-3">
            <div className="space-y-3">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-[#7569B2]" />
                <span className="lato-regular text-base text-[#B8B8DC]">
                  Adjustable shoulder straps for a comfortable fit
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-[#7569B2]" />
                <span className="lato-regular text-base text-[#B8B8DC]">
                  Padded back panel for added comfort and support
                </span>
              </li>
            </div>
            <div className="space-y-3">
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-[#7569B2]" />
                <span className="lato-regular text-base text-[#B8B8DC]">
                  Simple neutral colours.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-[#7569B2]" />
                <span className="lato-regular text-base text-[#B8B8DC]">
                  Durable materials for long-lasting use
                </span>
              </li>
            </div>
          </ul>
          <Link
            href="/products"
            className="josefin-semibold mt-7 inline-block rounded-sm bg-pink-primary py-4 px-10 text-base leading-none text-white"
          >
            Shop Now
          </Link>
        </div>
        <figure>
          <Image src={backpack} alt="backpack" quality={90} />
        </figure>
      </div>
    </HomepageSection>
  );
}
