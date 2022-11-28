import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import backpack from "../../public/assets/images/backpack.png";

import { HomepageSection } from "./homepage-section";
import { PrimaryButton } from "../ui/button/primary-button";

export function HomePageDiscount() {
  return (
    <HomepageSection title="Discount Item" className="mt-32">
      <ul className="flex items-center justify-center gap-x-6 mt-8">
        <li>
          <button
            type="button"
            className="text-base md:text-lg text-navy-blue lato-regular"
          >
            Wood Chair
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-base md:text-lg text-navy-blue lato-regular"
          >
            Plastic Chair
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-base md:text-lg text-navy-blue lato-regular"
          >
            Sofa Collection
          </button>
        </li>
      </ul>
      <div className="flex flex-wrap items-end justify-center gap-x-20 relative xl:-top-32">
        <div className="mt-10">
          <h3 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
            20% Discount Of All Products
          </h3>
          <p className="text-xl text-pink-primary josefin-regular mt-4">
            Eams Sofa Compact
          </p>
          <p className="text-base text-[#B7BACB] lato-regular max-w-[523px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="flex flex-wrap max-w-[510px] gap-x-11 gap-y-3 mt-7">
            <div className="space-y-3">
              <li className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-[#7569B2]" />
                <span className="text-base text-[#B8B8DC] lato-regular">
                  Material expose like metals
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-[#7569B2]" />
                <span className="text-base text-[#B8B8DC] lato-regular">
                  Clear lines and geomatric figures
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
                  Material expose like metals
                </span>
              </li>
            </div>
          </ul>
          <PrimaryButton
            type="button"
            className="py-5 px-12 josefin-regular mt-9"
          >
            Shop Now
          </PrimaryButton>
        </div>
        <figure>
          <Image src={backpack} alt="backpack" quality={90} />
        </figure>
      </div>
    </HomepageSection>
  );
}
