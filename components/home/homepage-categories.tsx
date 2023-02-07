import Image from "next/image";
import Link from "next/link";

import { HomepageSection } from "./homepage-section";

type Props<T> = {
  topCategories: T[];
};

export function HomePageCategories<
  T extends { id: number; image: string; title: string; price: number },
>({ topCategories }: Props<T>) {
  return (
    <HomepageSection title="Top Categories" className="mt-24">
      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {topCategories?.slice(2).map((product) => {
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
