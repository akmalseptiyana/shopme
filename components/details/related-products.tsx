import fetch from "cross-fetch";
import { useEffect, useState } from "react";

import { CardContent } from "@/components/ui/card/card-content";
import { CardMedia } from "@/components/ui/card/card-media";
import { CardProduct } from "@/components/ui/card/card-product";

import { Props } from "./utils/type";

type RelatedProductItem = {
  id: number;
  image: string;
  title: string;
  price: number;
};

export function RelatedProducts({ data }: Props) {
  const [relatedProducts, setRelatedProducts] = useState<
    RelatedProductItem[] | []
  >([]);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/products/category/${data.category}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data));
  }, [data.category]);

  return (
    <div className="mt-32">
      <h3 className="josefin-bold text-3xl text-[#101750] md:text-4xl">
        Related Products
      </h3>
      <div className="mt-12 flex flex-wrap justify-center gap-x-20 gap-y-8 md:justify-start">
        {relatedProducts?.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardMedia
                image={product.image}
                alt={product.title}
                width="w-[270px]"
                height="h-[340px]"
                className="rounded-[3px]"
              />
              <CardContent>
                <div className="mt-5 max-w-[150px]">
                  <h4
                    title={product.title}
                    className="josefin-semibold truncate text-base text-navy-blue"
                  >
                    {product.title}
                  </h4>
                </div>
                <h5 className="josefin-regular mt-3 text-sm text-navy-blue">
                  ${product.price}
                </h5>
              </CardContent>
            </CardProduct>
          );
        })}
      </div>
    </div>
  );
}
