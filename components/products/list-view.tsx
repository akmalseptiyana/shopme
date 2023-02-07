import {
  HeartIcon,
  MagnifyingGlassPlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { Rating } from "@/components/ui/rating";

import { addToCart } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";

export function ListView() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mt-24 flex flex-col gap-y-8">
      {products?.map((product) => {
        return (
          <div
            key={product.id}
            className="flex max-w-[1141px] flex-wrap items-center gap-x-8 gap-y-7 bg-white py-4 px-5 shadow"
          >
            <figure className="relative h-[217px] w-[313px] bg-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div>
              <h3 className="josefin-bold max-w-[550px] text-xl text-off-blue">
                {product.title}
              </h3>
              <div className="flex items-baseline gap-x-4">
                <h4 className="josefin-regular mt-3 text-lg text-off-blue">
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
              <p className="lato-regular mt-2 max-w-[591px] text-lg text-[#9295AA]">
                {product.description}
              </p>
              <ul className="mt-8 flex items-center gap-x-5">
                <li>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full shadow"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <ShoppingCartIcon className="h-5 w-5 text-[#535399]" />
                  </button>
                </li>
                <li>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full shadow">
                    <HeartIcon className="h-5 w-5 text-[#535399]" />
                  </button>
                </li>
                <li>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full shadow">
                    <MagnifyingGlassPlusIcon className="h-5 w-5 text-[#535399]" />
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
