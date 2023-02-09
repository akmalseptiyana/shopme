import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { HomepageSection } from "@/components/home/homepage-section";
import { ProductItem } from "@/components/home/utils/type";

import { useGetProductsLimitQuery } from "@/store/services/fakeStore";

import { discount } from "@/constans/discount";

export function HomePageLatestProduct() {
  const router = useRouter();
  const result = useGetProductsLimitQuery("6", { skip: router.isFallback });

  const { data } = result;

  return (
    <HomepageSection className="mt-20" title="Latest Products">
      <div className="mt-14 flex flex-wrap justify-center gap-x-9 gap-y-32">
        {data?.map((product: ProductItem, index: number) => {
          return (
            <div key={product.id} className="relative max-w-[360px]">
              <figure className="relative h-[269px] w-[360px] bg-white">
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
              <div className="mt-4 flex w-[360px] items-center justify-between space-x-4">
                <h3
                  className="josefin-regular truncate text-base text-navy-blue"
                  title={product.title}
                >
                  {product.title}
                </h3>
                <div className="flex flex-wrap items-center space-x-2">
                  <h4 className="josefin-regular text-sm text-navy-blue">
                    ${product.price}
                  </h4>
                  <span className="josefin-regular text-xs text-red-primary line-through">
                    ${discount[index]}
                  </span>
                </div>
              </div>

              <Link
                href={`/product/details/${product.id}`}
                className="absolute inset-0"
              ></Link>
            </div>
          );
        })}
      </div>
    </HomepageSection>
  );
}
