import Image from "next/image";

import acer from "@/public/assets/icons/logo-acer-1.svg";
import apple from "@/public/assets/icons/apple.svg";
import samsung from "@/public/assets/icons/samsung.svg";
import sandisk from "@/public/assets/icons/sandisk-logo-2007.svg";
import westernDigital from "@/public/assets/icons/western-digital-2.svg";

type SponsorProps = {
  className?: string;
};

export function Sponsor({ className }: SponsorProps) {
  return (
    <section className={className}>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-y-20 items-center justify-around max-w-[904px] mx-auto">
          <figure>
            <Image
              src={acer}
              alt="acer logo"
              style={{ width: 100, height: 100 }}
            />
          </figure>
          <figure>
            <Image
              src={apple}
              alt="apple logo"
              style={{ width: 50, height: 50 }}
            />
          </figure>
          <figure>
            <Image
              src={samsung}
              alt="samsung logo"
              style={{ width: 100, height: 100 }}
            />
          </figure>
          <figure>
            <Image
              src={sandisk}
              alt="sandisk logo"
              style={{ width: 100, height: 100 }}
            />
          </figure>
          <figure>
            <Image
              src={westernDigital}
              alt="western digital logo"
              style={{ width: 100, height: 100 }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
