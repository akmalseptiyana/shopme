import Image from "next/image";

import { PrimaryButton } from "@/components/ui/button/primary-button";

import smartwatch from "@/public/assets/images/smartwatch.png";

import { HomepageSection } from "./homepage-section";

export function HomePageUnique() {
  return (
    <HomepageSection className="mt-36 bg-[#F1F0FF] pb-9">
      <div className="flex flex-wrap items-center justify-center gap-x-10">
        <figure>
          <Image src={smartwatch} alt="phone promo" quality={90} />
        </figure>
        <div className="max-w-[507px]">
          <h2 className="josefin-bold text-3xl text-navy-blue md:text-4xl">
            Unique Features Of leatest & Trending Products
          </h2>
          <ul className="mt-7 flex flex-col gap-y-3">
            <li className="flex items-center space-x-3">
              <div className="h-3 w-3 shrink-0 rounded-full bg-[#F52B70]"></div>
              <p className="lato-regular text-base text-[#ACABC3]">
                Touchscreen display
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <div className="h-3 w-3 shrink-0 rounded-full bg-[#2B2BF5]"></div>
              <p className="lato-regular max-w-[461px] text-base text-[#ACABC3]">
                Water-resistant design
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <div className="h-3 w-3 shrink-0 rounded-full bg-[#2BF5CC]"></div>
              <p className="lato-regular text-base text-[#ACABC3]">
                Built-in GPS
              </p>
            </li>
          </ul>
          <div className="mt-9 flex items-center space-x-5">
            <PrimaryButton
              type="button"
              className="josefin-semibold py-[14px] px-6"
            >
              Add To Cart
            </PrimaryButton>
            <h4 className="josefin-semibold text-sm text-navy-blue">
              Smartwatch <br />
              <span className="lato-regular text-navy-blue">$32.00</span>
            </h4>
          </div>
        </div>
      </div>
    </HomepageSection>
  );
}
