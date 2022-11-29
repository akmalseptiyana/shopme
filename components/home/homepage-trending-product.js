import Image from "next/image";
import Link from "next/link";
import controller from "../../public/assets/images/controller.png";
import botle from "../../public/assets/images/botle.png";

import { HomepageSection } from "./homepage-section";
import { trendingProductDiscount } from "../../constans/discount";

export function HomePageTrendingProducts({ trendingProducts }) {
  return (
    <HomepageSection title="Trending Products" className="mt-32">
      <div className="flex flex-wrap gap-x-7 gap-y-10 justify-center mt-10">
        {trendingProducts
          ?.filter((product) => product.rating.rate > 4.5)
          .slice(1, 5)
          ?.map((product, index) => {
            return (
              <div
                key={product.id}
                className="relative w-[270px] pt-3 px-3 pb-8 shadow-md bg-[#F5F6F8]"
              >
                <figure className="relative w-[247px] h-[244px] bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </figure>
                <div className="mt-4">
                  <h3 className="text-base text-navy-blue lato-bold text-center">
                    {product.title}
                  </h3>
                  <h4 className="text-sm text-navy-blue josefin-regular text-center mt-2">
                    ${product.price}
                    <span className="text-xs text-navy-blue/30 line-through ml-3">
                      ${trendingProductDiscount[index]}
                    </span>
                  </h4>
                </div>

                <Link
                  href={`/product/details/${product.id}`}
                  className="absolute inset-0"
                ></Link>
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
          <figure className="absolute top-0 md:-top-16 right-0 md:-right-4">
            <Image src={controller} alt="ps controller image" priority />
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
          <figure className="absolute bottom-0 right-0 md:-right-8">
            <Image
              src={botle}
              alt="botle image"
              priority
              style={{ width: 180, height: 250, objectFit: "contain" }}
            />
          </figure>
        </div>
        <div className="flex flex-col space-y-5">
          {trendingProducts?.slice(7, 10).map((product) => {
            return (
              <div key={product.id} className="flex items-center gap-x-2">
                <figure className="relative w-[107px] h-[74px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
