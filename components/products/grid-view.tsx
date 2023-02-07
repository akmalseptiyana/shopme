import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useGetProductsQuery } from "@/store/services/fakeStore";

import { ProductItem } from "./utils/type";

export function GridView() {
  const router = useRouter();
  const result = useGetProductsQuery({ skip: router.isFallback });
  const { data, isLoading } = result;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mt-36 grid grid-cols-1 items-center justify-items-center gap-x-14 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map(({ id, title, price, image }: ProductItem) => {
        return (
          <div key={id} className="relative max-w-[270px]">
            <figure className="relative h-[280px] w-[270px] bg-white">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div className="mt-4 text-center">
              <h3 className="josefin-bold text-lg text-navy-blue">{title}</h3>
              <h4 className="josefin-regular mt-5 text-sm text-navy-blue">
                ${price}
              </h4>
            </div>

            <Link
              href={`/product/details/${id}`}
              className="absolute inset-0"
            ></Link>
          </div>
        );
      })}
    </div>
  );
}
