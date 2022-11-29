import Image from "next/image";
import Link from "next/link";
import phonePromo from "../../public/assets/images/phone-promotional.png";

import { HomepageSection } from "./homepage-section";

export function HomePageStart() {
  return (
    <HomepageSection className="bg-[#F2F0FF] py-10">
      <div className="flex flex-wrap items-center justify-between gap-y-20">
        <div>
          <p className="text-base text-pink-primary lato-bold">
            Shop gifts for everyone on your list...
          </p>
          <h1 className="text-4xl md:text-5xl md:leading-tight text-black josefin-bold mt-3 max-w-[644px]">
            The Best Place To Find And Buy Amazing Products
          </h1>
          <p className="text-base text-[#8A8FB9] lato-regular mt-3 max-w-[560px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <Link
            href="/products"
            className="inline-block leading-none text-base text-white rounded-sm py-4 px-10 josefin-semibold bg-pink-primary mt-7"
          >
            Shop Now
          </Link>
        </div>
        <figure>
          <Image src={phonePromo} alt="phone promo" quality={90} priority />
        </figure>
      </div>
    </HomepageSection>
  );
}
