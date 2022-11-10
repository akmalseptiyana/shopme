import Image from "next/legacy/image";

import { HomepageSection } from "./homepage-section";
import { PrimaryButton } from "../ui/button/primary-button";

export function HomePageStart() {
  return (
    <HomepageSection className="bg-[#F2F0FF] py-10">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <p className="text-base text-pink-primary lato-bold">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl md:text-5xl md:leading-tight text-black josefin-bold mt-3 max-w-[644px]">
            New Furniture Collection Trends in 2022
          </h1>
          <p className="text-base text-[#8A8FB9] lato-bold mt-3 max-w-[560px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <PrimaryButton
            className="py-4 px-10 bg-pink-primary text-base text-white josefin-semibold rounded-sm mt-7"
            type="button"
          >
            Shop Now
          </PrimaryButton>
        </div>
        <div className="relative w-[625px] h-[607px]">
          <Image
            src="/images/phone-promotional.png"
            alt="phone promo"
            layout="fill"
            objectFit="contain"
            quality={90}
            priority
          />
        </div>
      </div>
    </HomepageSection>
  );
}
