import Image from "next/image";
import Link from "next/link";

import { HomepageSection } from "./homepage-section";

type Props<T> = {
  featuredProducts: T[];
};

export function HomePageFeaturedProduct<
  T extends { id: number; image: string; title: string; price: number },
>({ featuredProducts }: Props<T>) {
  return (
    <HomepageSection className="mt-32" title="Featured Products">
      <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-8">
        {featuredProducts?.map((product) => {
          return (
            <div
              key={product.id}
              className="relative bg-[#F6F7FB] drop-shadow-xl"
            >
              <figure className="relative h-[237px] w-[270px] bg-white">
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
              <div className="mt-4 w-[270px] py-4 px-4 text-center">
                <header>
                  <h3
                    className="lato-bold text-lg text-pink-primary"
                    title={product.title}
                  >
                    {product.title}
                  </h3>
                </header>
                <h5 className="lato-regular mt-3 text-sm text-navy-blue">
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
