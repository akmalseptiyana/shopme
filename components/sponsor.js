import Image from "next/image";
import acer from "../public/images/acer-2011.svg";
import apple from "../public/images/apple-14.svg";
import samsung from "../public/images/samsung.svg";
import sandisk from "../public/images/sandisk-logo-2007.svg";
import westernDigital from "../public/images/western-digital-2.svg";

export function Sponsor() {
  return (
    <section>
      <div className="container mt-24">
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
