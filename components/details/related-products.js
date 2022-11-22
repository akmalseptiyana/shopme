import { useEffect, useState } from "react";
import fetch from "cross-fetch";

import { CardProduct } from "../ui/card/card-product";
import { CardMedia } from "../ui/card/card-media";
import { CardContent } from "../ui/card/card-content";

export function RelatedProducts({ data }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  console.log(relatedProducts);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/products/category/${data.category}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data));
  }, []);

  return (
    <div className="mt-32">
      <h3 className="text-3xl md:text-4xl text-[#101750] josefin-bold">
        Related Products
      </h3>
      <div className="flex flex-wrap justify-center md:justify-start gap-x-20 gap-y-8 mt-12">
        {relatedProducts?.map((product) => {
          return (
            <CardProduct>
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
                    className="text-base text-navy-blue josefin-semibold truncate"
                  >
                    {product.title}
                  </h4>
                </div>
                <h5 className="text-sm text-navy-blue josefin-regular mt-3">
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
