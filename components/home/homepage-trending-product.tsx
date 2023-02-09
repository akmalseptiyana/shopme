import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { HomepageSection } from "@/components/home/homepage-section";
import { ProductItem } from "@/components/home/utils/type";

import { useGetProductsQuery } from "@/store/services/fakeStore";

import { trendingProductDiscount } from "@/constans/discount";
import botle from "@/public/assets/images/botle.png";
import controller from "@/public/assets/images/controller.png";

export function HomePageTrendingProducts() {
  const router = useRouter();
  const result = useGetProductsQuery({ skip: router.isFallback });
  const { data } = result;

  return (
    <HomepageSection title="Trending Products" className="mt-32">
      <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-10">
        {data
          ?.filter((product: ProductItem) => product.rating.rate > 4.5)
          .slice(1, 5)
          ?.map((product: ProductItem, index: number) => {
            return (
              <div
                key={product.id}
                className="relative w-[270px] bg-[#F5F6F8] px-3 pt-3 pb-8 shadow-md"
              >
                <figure className="relative h-[244px] w-[247px] bg-white">
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
                  <h3 className="lato-bold text-center text-base text-navy-blue">
                    {product.title}
                  </h3>
                  <h4 className="josefin-regular mt-2 text-center text-sm text-navy-blue">
                    ${product.price}
                    <span className="ml-3 text-xs text-navy-blue/30 line-through">
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

      <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-10">
        <div className="relative h-[270px] w-[420px] bg-[#FFF6FB] px-6 py-8">
          <h3 className="josefin-semibold text-2xl text-navy-blue">
            23% off in all Products
          </h3>
          <Link
            href="#"
            className="lato-bold border-b border-pink-primary pb-[2px] text-base text-pink-primary"
          >
            Show Now
          </Link>
          <figure className="absolute top-0 right-0 md:-top-16 md:-right-4">
            <Image src={controller} alt="ps controller image" priority />
          </figure>
        </div>
        <div className="relative h-[270px] w-[420px] bg-[#EEEFFB] px-6 py-8">
          <h3 className="josefin-semibold text-2xl text-navy-blue">
            23% off in all Products
          </h3>
          <Link
            href="#"
            className="lato-bold border-b border-pink-primary pb-[2px] text-base text-pink-primary"
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
          {data?.slice(7, 10).map((product: ProductItem) => {
            return (
              <div key={product.id} className="flex items-center gap-x-2">
                <figure className="relative h-[74px] w-[107px]">
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
                    className="josefin-semibold truncate text-base text-navy-blue"
                    title={product.title}
                  >
                    {product.title}
                  </h3>
                  <h4 className="josefin-regular text-xs text-navy-blue">
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
