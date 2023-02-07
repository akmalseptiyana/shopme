import Image from "next/image";

export function Features() {
  return (
    <div className="mt-14 flex flex-wrap justify-center gap-x-7 gap-y-8">
      <div className="flex max-w-[270px] flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/assets/icons/icons8-free-delivery.png"
          alt="free delivery"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="josefin-semibold mt-7 text-xl text-navy-blue">
          Free Delivery
        </h3>
        <p className="lato-bold mt-5 text-center text-base text-[#1a0b5b]/[.3]">
          Free delivery is available on all orders placed on our website.
        </p>
      </div>
      <div className="flex max-w-[270px] flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/assets/icons/icons8-cashback.png"
          alt="cashback"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="josefin-semibold mt-7 text-xl text-navy-blue">
          100% Cash Back
        </h3>
        <p className="lato-bold mt-5 text-center text-base text-[#1a0b5b]/[.3]">
          If you purchase any product from our store, you will receive 100% cash
          back on your purchase.
        </p>
      </div>
      <div className="flex max-w-[270px] flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/assets/icons/icons8-best-seller.png"
          alt="best seller"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="josefin-semibold mt-7 text-xl text-navy-blue">
          Premium Quality
        </h3>
        <p className="lato-bold mt-5 text-center text-base text-[#1a0b5b]/[.3]">
          We are committed to providing our customers with the highest level of
          quality and satisfaction.
        </p>
      </div>
      <div className="flex max-w-[270px] flex-col items-center bg-white px-7 pb-11 pt-14 shadow">
        <Image
          src="/assets/icons/icons8-24-7.png"
          alt="24/7 support"
          width={60}
          height={60}
          quality={90}
        />
        <h3 className="josefin-semibold mt-7 text-xl text-navy-blue">
          24/7 Support
        </h3>
        <p className="lato-bold mt-5 text-center text-base text-[#1a0b5b]/[.3]">
          Our team is dedicated to providing 24/7 support to ensure that you
          have access to help whenever you need it.
        </p>
      </div>
    </div>
  );
}
