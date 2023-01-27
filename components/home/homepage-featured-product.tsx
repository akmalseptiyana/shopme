import Image from "next/image";
import Link from "next/link";

import { HomepageSection } from "./homepage-section";

type Props<T> = {
  featuredProducts: T[];
};

export function HomePageFeaturedProduct<
  T extends { id: number; image: string; title: string; price: number }
>({ featuredProducts }: Props<T>) {
  return (
    <HomepageSection className="mt-32" title="Featured Products">
      <div className="flex flex-wrap gap-x-7 gap-y-8 justify-center mt-12">
        {featuredProducts?.map((product) => {
          return (
            <div
              key={product.id}
              className="relative bg-[#F6F7FB] drop-shadow-xl"
            >
              <figure className="relative w-[270px] h-[237px] bg-white">
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
              <div className="mt-4 text-center w-[270px] py-4 px-4">
                <header>
                  <h3
                    className="text-pink-primary text-lg lato-bold"
                    title={product.title}
                  >
                    {product.title}
                  </h3>
                </header>
                <h5 className="text-navy-blue text-sm lato-regular mt-3">
                  ${product.price}
                </h5>
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
