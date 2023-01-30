import Image from "next/image";
import Link from "next/link";

import { HomepageSection } from "./homepage-section";

type Props<T> = {
  topCategories: T[];
};

export function HomePageCategories<
  T extends { id: number; image: string; title: string; price: number }
>({ topCategories }: Props<T>) {
  return (
    <HomepageSection title="Top Categories" className="mt-24">
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {topCategories?.slice(2).map((product) => {
          return (
            <div
              key={product.id}
              className="relative flex flex-col items-center"
            >
              <figure className="relative w-[269px] h-[269px]">
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
                  className="text-xl text-navy-blue text-center josefin-regular mt-6"
                  title={product.title}
                >
                  {product.title}
                </h3>
              </div>
              <h4 className="text-base text-navy-blue josefin-regular mt-3">
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
