import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/outline";
import { PrimaryButton } from "../ui/button/primary-button";
import { SocialIcons } from "../ui/social-icons";

export function CardProductDetails({ data }) {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-8 bg-white py-8 lg:py-3 px-4 max-w-[1170px] rounded-sm shadow">
      <figure className="relative w-[550px] h-[200px] md:h-[450px]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </figure>
      <div className="flex-1">
        <h3 className="text-3xl md:text-4xl text-[#0D134E] josefin-semibold">
          {data.title}
        </h3>
        <h4 className="text-base text-navy-blue josefin-regular mt-3">
          ${data.price}
        </h4>
        <p className="text-base text-[#A9ACC6] josefin-semibold mt-3">
          {data.description}
        </p>
        <div className="flex items-center gap-x-5 mt-8">
          <PrimaryButton className="py-4 px-7 josefin-regular">
            Add To Cart
          </PrimaryButton>
          <HeartIcon className="w-7 h-7 text-[#535399]" />
        </div>
        <h4 className="text-xl text-navy-blue josefin-semibold mt-10">
          Categories: {data.category}
        </h4>
        <div className="flex items-center gap-x-4 mt-4">
          <h4 className="text-xl text-navy-blue josefin-semibold">Share</h4>
          <SocialIcons className="first:bg-navy-blue bg-pink-primary last:bg-navy-blue" />
        </div>
      </div>
    </div>
  );
}
