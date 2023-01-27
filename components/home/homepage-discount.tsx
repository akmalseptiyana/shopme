import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

import backpack from "@/public/assets/images/backpack.png";
import { HomepageSection } from "./homepage-section";

export function HomePageDiscount() {
  return (
    <HomepageSection title="Discount Item" className="mt-32">
      <ul className="flex items-center justify-center gap-x-6 mt-8">
        <li>
          <button
            type="button"
            className="text-base md:text-lg text-navy-blue lato-regular underline"
          >
            Brown Backpack
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-base md:text-lg text-navy-blue lato-regular"
          >
            Smartwatch
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-base md:text-lg text-navy-blue lato-regular"
          >
            T-shirt
          </button>
        </li>
      </ul>
      <div className="flex flex-wrap items-end justify-center gap-x-20 relative xl:-top-32">
        <div className="mt-10">
          <h3 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
            20% Discount Of All Products
          </h3>
          <p className="text-xl text-pink-primary josefin-regular mt-4">
            Brown Backpack
          </p>
          <p className="text-base text-[#B7BACB] lato-regular max-w-[523px] mt-5">
            With multiple compartments, pockets, and compartments, this backpack
            has plenty of room for all of your belongings, from your laptop and
            books to your water bottle and snacks. The padded shoulder straps
            and back panel ensure a comfortable and ergonomic fit, while the
            sturdy materials and construction make it durable.
          </p>
          <ul className="flex flex-wrap max-w-[510px] gap-x-11 gap-y-3 mt-7">
            <div className="space-y-3">
              <li className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-[#7569B2]" />
                <span className="text-base text-[#B8B8DC] lato-regular">
                  Adjustable shoulder straps for a comfortable fit
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-[#7569B2]" />
                <span className="text-base text-[#B8B8DC] lato-regular">
                  Padded back panel for added comfort and support
                </span>
              </li>
            </div>
            <div className="space-y-3">
              <li className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-[#7569B2]" />
                <span className="text-base text-[#B8B8DC] lato-regular">
                  Simple neutral colours.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-[#7569B2]" />
                <span className="text-base text-[#B8B8DC] lato-regular">
                  Durable materials for long-lasting use
                </span>
              </li>
            </div>
          </ul>
          <Link
            href="/products"
            className="inline-block leading-none text-base text-white rounded-sm py-4 px-10 josefin-semibold bg-pink-primary mt-7"
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
