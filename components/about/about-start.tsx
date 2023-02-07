import Image from "next/image";

import { PrimaryButton } from "@/components/ui/button/primary-button";

import about from "@/public/assets/images/about.png";

export function AboutStart() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-10">
      <figure>
        <Image src={about} alt="about image" quality={90} />
      </figure>
      <div className="max-w-[550px]">
        <h3 className="josefin-bold text-3xl text-navy-blue md:text-4xl">
          Know About Our Ecomerce Business, History
        </h3>
        <p className="lato-regular mt-4 text-base text-sub-text">
          Our team is passionate about helping our clients achieve their goals,
          and we strive to exceed expectations with every project we take on.
          Whether you need help with marketing, branding, design, or any other
          aspect of your business, we are here to help. Contact us today to
          learn more about how we can help you succeed.
        </p>
        <PrimaryButton className="lato-regular mt-10 py-3 px-7" type="button">
          Contact us
        </PrimaryButton>
      </div>
    </div>
  );
}
