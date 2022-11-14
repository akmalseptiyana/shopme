import Image from "next/image";
import phonePromo from "../../public/images/phone-promotional.png";

import { HomepageSection } from "./homepage-section";
import { PrimaryButton } from "../ui/button/primary-button";

export function HomePageStart() {
  return (
    <HomepageSection className="bg-[#F2F0FF] py-10">
      <div className="flex flex-wrap items-center justify-between gap-y-20">
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
            className="py-4 px-10 josefin-semibold mt-7"
            type="button"
          >
            Shop Now
          </PrimaryButton>
        </div>
        <figure>
          <Image src={phonePromo} alt="phone promo" quality={90} priority />
        </figure>
      </div>
    </HomepageSection>
  );
}
