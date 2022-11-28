import Image from "next/image";
import about from "../../public/assets/images/about.png";

import { PrimaryButton } from "../ui/button/primary-button";

export function AboutStart() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-10">
      <figure>
        <Image src={about} alt="about image" quality={90} />
      </figure>
      <div className="max-w-[550px]">
        <h3 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
          Know About Our Ecomerce Business, History
        </h3>
        <p className="text-base text-sub-text lato-regular mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <PrimaryButton className="py-3 px-7 lato-regular mt-20">
          Contact us
        </PrimaryButton>
      </div>
    </div>
  );
}
