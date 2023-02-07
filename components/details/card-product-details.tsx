import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { PrimaryButton } from "@/components/ui/button/primary-button";
import { Rating } from "@/components/ui/rating";
import { SocialIcons } from "@/components/ui/social-icons";

import { addToCart } from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store/store";

import { Props } from "./utils/type";

export function CardProductDetails({ data }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex max-w-[1170px] flex-wrap items-center gap-x-10 gap-y-8 rounded-sm bg-white py-8 px-4 shadow lg:py-3">
      <figure className="relative h-[200px] w-[550px] md:h-[450px]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </figure>
      <div className="flex-1">
        <h3 className="josefin-semibold text-3xl text-[#0D134E] md:text-4xl">
          {data.title}
        </h3>
        <div className="relative mt-4 flex max-w-[160px] items-end">
          <Rating value={data.rating.rate} width={24} height={24} spacing={4} />
          <span className="josefin-regular absolute right-0 text-sm text-navy-blue">
            ({data.rating.count})
          </span>
        </div>
        <h4 className="josefin-regular mt-3 text-base text-navy-blue">
          ${data.price}
        </h4>
        <p className="josefin-semibold mt-3 text-base text-[#A9ACC6]">
          {data.description}
        </p>
        <div className="mt-8 flex items-center gap-x-5">
          <PrimaryButton
            type="button"
            className="josefin-regular py-4 px-7"
            onClick={() => dispatch(addToCart(data))}
          >
            Add To Cart
          </PrimaryButton>
          <HeartIcon className="h-7 w-7 text-[#535399]" />
        </div>
        <h4 className="josefin-semibold mt-10 text-xl text-navy-blue">
          Categories: {data.category}
        </h4>
        <div className="mt-4 flex items-center gap-x-4">
          <h4 className="josefin-semibold text-xl text-navy-blue">Share</h4>
          <SocialIcons className="bg-pink-primary first:bg-navy-blue last:bg-navy-blue" />
        </div>
      </div>
    </div>
  );
}
