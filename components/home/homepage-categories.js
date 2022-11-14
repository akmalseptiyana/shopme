import Image from "next/image";

import { HomepageSection } from "./homepage-section";

export function HomePageCategories({ topCategories }) {
  return (
    <HomepageSection title="Top Categories" className="mt-24">
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {topCategories?.slice(2).map((product) => {
          return (
            <div key={product.id} className="flex flex-col items-center">
              <figure className="relative w-[269px] h-[269px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </figure>
              <div className="w-[150px]">
                <h3
                  className="text-xl text-navy-blue josefin-regular mt-6 truncate"
                  title={product.title}
                >
                  {product.title}
                </h3>
              </div>
              <h4 className="text-base text-navy-blue josefin-regular mt-3">
                ${product.price}
              </h4>
            </div>
          );
        })}
      </div>
    </HomepageSection>
  );
}
