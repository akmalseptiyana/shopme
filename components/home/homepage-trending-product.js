import Image from "next/image";
import Link from "next/link";

import { HomepageSection } from "./homepage-section";

export function HomePageTrendingProducts({ trendingProducts }) {
  return (
    <HomepageSection title="Trending Products" className="mt-32">
      <div className="flex flex-wrap gap-x-7 gap-y-10 justify-center mt-10">
        {trendingProducts
          ?.filter((product) => product.rating.rate > 4.5)
          .slice(1, 5)
          ?.map((product) => {
            return (
              <div
                key={product.id}
                className="w-[270px] pt-3 px-3 pb-8 shadow-md bg-[#F5F6F8]"
              >
                <div className="w-[247px] h-[244px] bg-white">
                  <figure className="relative w-[247px] h-[244px]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      quality={90}
                      sizes="100vw"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </figure>
                </div>
                <div className="mt-4">
                  <h3 className="text-base text-navy-blue lato-bold text-center">
                    {product.title}
                  </h3>
                  <h4 className="text-sm text-navy-blue josefin-regular text-center mt-2">
                    ${product.price}
                    <span className="text-xs text-navy-blue/30 line-through ml-3">
                      $42.00
                    </span>
                  </h4>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex flex-wrap gap-x-7 gap-y-10 justify-center mt-10">
        <div className="w-[420px] h-[270px] bg-[#FFF6FB] px-6 py-8 relative">
          <h3 className="text-2xl text-navy-blue josefin-semibold">
            23% off in all Products
          </h3>
          <Link
            href="#"
            className="text-base text-pink-primary lato-bold border-b border-pink-primary pb-[2px]"
          >
            Show Now
          </Link>
          <figure className="absolute top-0 -right-4">
            <Image
              src="/images/controller.png"
              alt="botle image"
              width={350}
              height={207}
              quality={90}
            />
          </figure>
        </div>
        <div className="w-[420px] h-[270px] bg-[#EEEFFB] px-6 py-8 relative">
          <h3 className="text-2xl text-navy-blue josefin-semibold">
            23% off in all Products
          </h3>
          <Link
            href="#"
            className="text-base text-pink-primary lato-bold border-b border-pink-primary pb-[2px]"
          >
            View Collection
          </Link>
          <figure className="absolute bottom-0 -right-8">
            <Image
              src="/images/botle.png"
              alt="botle image"
              width={180}
              height={150}
              quality={90}
            />
          </figure>
        </div>
        <div className="flex flex-col space-y-5">
          {trendingProducts?.slice(7, 10).map((product) => {
            return (
              <div className="flex items-center gap-x-2">
                <figure className="relative w-[107px] h-[74px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    quality={90}
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </figure>
                <div className="w-[151px]">
                  <h3
                    className="text-base text-navy-blue josefin-semibold truncate"
                    title={product.title}
                  >
                    {product.title}
                  </h3>
                  <h4 className="text-xs text-navy-blue josefin-regular">
                    ${product.price}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HomepageSection>
  );
}
