import Image from "next/image";

export function Features() {
  return (
    <div className="flex flex-wrap justify-center gap-x-7 gap-y-8 mt-14">
      <div className="max-w-[270px] flex flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/images/icons8-free-delivery.png"
          alt="free delivery"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="text-xl text-navy-blue josefin-semibold mt-7">
          Free Delivery
        </h3>
        <p className="text-base text-[#1a0b5b]/[.3] lato-bold text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
      <div className="max-w-[270px] flex flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/images/icons8-cashback.png"
          alt="cashback"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="text-xl text-navy-blue josefin-semibold mt-7">
          100% Cash Back
        </h3>
        <p className="text-base text-[#1a0b5b]/[.3] lato-bold text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
      <div className="max-w-[270px] flex flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/images/icons8-best-seller.png"
          alt="best seller"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="text-xl text-navy-blue josefin-semibold mt-7">
          Premium Quality
        </h3>
        <p className="text-base text-[#1a0b5b]/[.3] lato-bold text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
      <div className="max-w-[270px] flex flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/images/icons8-last-24-hours.png"
          alt="24/7 support"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="text-xl text-navy-blue josefin-semibold mt-7">
          24/7 Support
        </h3>
        <p className="text-base text-[#1a0b5b]/[.3] lato-bold text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
    </div>
  );
}
