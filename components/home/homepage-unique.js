import Image from "next/image";
import smartwatch from "../../public/images/smartwatch.png";

import { PrimaryButton } from "../ui/button/primary-button";
import { HomepageSection } from "./homepage-section";

export function HomePageUnique() {
  return (
    <HomepageSection className="mt-36 bg-[#F1F0FF] pb-9">
      <div className="flex flex-wrap items-center justify-center gap-x-10">
        <figure>
          <Image src={smartwatch} alt="phone promo" quality={90} />
        </figure>
        <div className="max-w-[507px]">
          <h2 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
            Unique Features Of leatest & Trending Products
          </h2>
          <ul className="flex flex-col gap-y-3 mt-7">
            <li className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[#F52B70] shrink-0"></div>
              <p className="text-base text-[#ACABC3] lato-regular">
                All frames constructed with hardwood solids and laminates
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[#2B2BF5] shrink-0"></div>
              <p className="text-base text-[#ACABC3] lato-regular max-w-[461px]">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[#2BF5CC] shrink-0"></div>
              <p className="text-base text-[#ACABC3] lato-regular">
                Arms, backs and seats are structurally reinforced
              </p>
            </li>
          </ul>
          <div className="flex items-center space-x-5 mt-9">
            <PrimaryButton className="py-[14px] px-6 josefin-semibold">
              Add To Cart
            </PrimaryButton>
            <h4 className="text-sm text-navy-blue josefin-semibold">
              B&B Italian Sofa <br />
              <span className="text-navy-blue lato-regular">$32.00</span>
            </h4>
          </div>
        </div>
      </div>
    </HomepageSection>
  );
}
