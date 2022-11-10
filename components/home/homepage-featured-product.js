import Image from "next/image";

import { HomepageSection } from "./homepage-section";

export function HomePageFeaturedProduct({ featuredProducts }) {
  return (
    <HomepageSection className="mt-32" title="Featured Products">
      <div className="flex flex-wrap gap-x-7 gap-y-8 justify-center mt-12">
        {featuredProducts?.map((product) => {
          return (
            <div key={product.id} className="bg-[#F6F7FB] drop-shadow-xl">
              <div className="w-[270px] h-[250px] bg-white">
                <figure className="relative w-[270px] h-[237px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </figure>
              </div>
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
            </div>
          );
        })}
      </div>
    </HomepageSection>
  );
}
