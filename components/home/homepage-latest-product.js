import Image from "next/image";

import { HomepageSection } from "./homepage-section";
import { discount } from "../../constans/discount";

export function HomePageLatestProduct({ latestProducts }) {
  return (
    <HomepageSection className="mt-20" title="Latest Products">
      <div className="flex flex-wrap gap-x-9 gap-y-32 justify-center mt-14">
        {latestProducts?.map((product, index) => {
          return (
            <div key={product.id} className="max-w-[360px]">
              <div className="w-[360px] h-[269px] bg-white">
                <figure className="relative w-[360px] h-[269px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                    quality={90}
                  />
                </figure>
              </div>
              <div className="flex items-center justify-between space-x-4 mt-4 w-[360px]">
                <h3
                  className="text-base text-navy-blue josefin-regular truncate"
                  title={product.title}
                >
                  {product.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm text-navy-blue josefin-regular">
                    ${product.price}
                  </h4>
                  <span className="text-xs text-red-primary josefin-regular line-through">
                    ${discount[index]}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </HomepageSection>
  );
}
