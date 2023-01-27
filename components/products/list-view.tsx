import Image from "next/image";
import {
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";

import { useCart } from "@/lib/hooks/cart-context";
import { Rating } from "@/components/ui/rating";
import { ProductProps } from "./utils/type";

export function ListView({ products }: ProductProps) {
  const { dispatch } = useCart();

  return (
    <div className="flex flex-col gap-y-8 mt-24">
      {products?.map((product) => {
        return (
          <div
            key={product.id}
            className="flex flex-wrap items-center gap-x-8 gap-y-7 max-w-[1141px] py-4 px-5 bg-white shadow"
          >
            <figure className="relative w-[313px] h-[217px] bg-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div>
              <h3 className="text-xl text-off-blue josefin-bold max-w-[550px]">
                {product.title}
              </h3>
              <div className="flex items-baseline gap-x-4">
                <h4 className="text-lg text-off-blue josefin-regular mt-3">
                  ${product.price}
                </h4>
                <Rating
                  value={product.rating.rate}
                  width={24}
                  height={24}
                  spacing={4}
                  className="top-1"
                />
              </div>
              <p className="text-lg text-[#9295AA] lato-regular mt-2 max-w-[591px]">
                {product.description}
              </p>
              <ul className="flex items-center gap-x-5 mt-8">
                <li>
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", item: product })
                    }
                  >
                    <ShoppingCartIcon className="w-5 h-5 text-[#535399]" />
                  </button>
                </li>
                <li>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center shadow">
                    <HeartIcon className="w-5 h-5 text-[#535399]" />
                  </button>
                </li>
                <li>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center shadow">
                    <MagnifyingGlassPlusIcon className="w-5 h-5 text-[#535399]" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
