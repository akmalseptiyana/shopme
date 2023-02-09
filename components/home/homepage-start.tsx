import Image from "next/image";
import Link from "next/link";

import { HomepageSection } from "@/components/home/homepage-section";

import phonePromo from "@/public/assets/images/phone-promotional.png";

export function HomePageStart() {
  return (
    <HomepageSection className="bg-[#F2F0FF] py-10">
      <div className="flex flex-wrap items-center justify-between gap-y-20">
        <div>
          <p className="lato-bold text-base text-pink-primary">
            Shop gifts for everyone on your list...
          </p>
          <h1 className="josefin-bold mt-3 max-w-[644px] text-4xl text-black md:text-5xl md:leading-tight">
            The Best Place To Find And Buy Amazing Products
          </h1>
          <p className="lato-regular mt-3 max-w-[560px] text-base text-[#8A8FB9]">
            Welcome to our ecommerce store! We offer a wide range of products to
            fit your needs, from clothing, accessories and electronics. Our
            top-quality products are carefully curated to provide you with the
            best shopping experience possible.
          </p>
          <Link
            href="/products"
            className="josefin-semibold mt-7 inline-block rounded-sm bg-pink-primary py-4 px-10 text-base leading-none text-white"
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
