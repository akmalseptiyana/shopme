import {
  HeartIcon,
  MagnifyingGlassPlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { Rating } from "@/components/ui/rating";

import { useGetProductsQuery } from "@/store/services/fakeStore";
import { addToCart } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";

import { ProductItem } from "./utils/type";

export function ListView() {
  const router = useRouter();
  const result = useGetProductsQuery({ skip: router.isFallback });
  const dispatch = useDispatch<AppDispatch>();
  const { data } = result;

  return (
    <div className="mt-24 flex flex-col gap-y-8">
      {data?.map((item: ProductItem) => {
        return (
          <div
            key={item.id}
            className="flex max-w-[1141px] flex-wrap items-center gap-x-8 gap-y-7 bg-white py-4 px-5 shadow"
          >
            <figure className="relative h-[217px] w-[313px] bg-white">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div>
              <h3 className="josefin-bold max-w-[550px] text-xl text-off-blue">
                {item.title}
              </h3>
              <div className="flex items-baseline gap-x-4">
                <h4 className="josefin-regular mt-3 text-lg text-off-blue">
                  ${item.price}
                </h4>
                <Rating
                  value={item.rating.rate}
                  width={24}
                  height={24}
                  spacing={4}
                  className="top-1"
                />
              </div>
              <p className="lato-regular mt-2 max-w-[591px] text-lg text-[#9295AA]">
                {item.description}
              </p>
              <ul className="mt-8 flex items-center gap-x-5">
                <li>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full shadow"
                    onClick={() => dispatch(addToCart(item))}
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
