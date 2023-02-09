import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { HomepageSection } from "@/components/home/homepage-section";
import { ProductItem } from "@/components/home/utils/type";

import { useGetProductsByCategoryQuery } from "@/store/services/fakeStore";

export function HomePageCategories() {
  const router = useRouter();
  const result = useGetProductsByCategoryQuery("electronics", {
    skip: router.isFallback,
  });

  const { data } = result;

  return (
    <HomepageSection title="Top Categories" className="mt-24">
      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {data?.slice(2).map((product: ProductItem) => {
          return (
            <div
              key={product.id}
              className="relative flex flex-col items-center"
            >
              <figure className="relative h-[269px] w-[269px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </figure>
              <div className="w-[270px]">
                <h3
                  className="josefin-regular mt-6 text-center text-xl text-navy-blue"
                  title={product.title}
                >
                  {product.title}
                </h3>
              </div>
              <h4 className="josefin-regular mt-3 text-base text-navy-blue">
                ${product.price}
              </h4>

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
