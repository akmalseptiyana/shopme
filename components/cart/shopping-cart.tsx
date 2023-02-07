import { XCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { PrimaryButton } from "@/components/ui/button/primary-button";

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  resetCart,
} from "@/store/slices/cartSlice";
import { AppDispatch, RootState } from "@/store/store";

export function ShoppingCart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);

  return (
    <div className="max-w-[800px] flex-auto">
      <div className="hidden grid-cols-cart md:grid">
        <h3 className="josefin-bold text-xl text-[#1D3178]">Product</h3>
        <h3 className="josefin-bold justify-self-center text-xl text-[#1D3178]">
          Price
        </h3>
        <h3 className="josefin-bold justify-self-center text-xl text-[#1D3178]">
          Quantity
        </h3>
        <h3 className="josefin-bold justify-self-end text-xl text-[#1D3178]">
          Total
        </h3>
      </div>
      <div className="mt-12 space-y-4">
        {cartItems.length === 0 ? (
          <p className="lato-regular text-center text-base text-[#A1A8C1]">
            Cart empty.{" "}
            <Link href="/products" className="underline">
              Shop Now
            </Link>
          </p>
        ) : (
          cartItems.map((product) => {
            return (
              <div
                key={product.id}
                className="grid grid-cols-cart-mobile items-center gap-x-5 border-b border-[#E1E1E4] pb-4 md:grid-cols-cart md:gap-0"
              >
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <figure className="relative h-[87px] w-[83px] shrink-0 bg-white">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "contain" }}
                      className="rounded-[3px]"
                    />
                    <XCircleIcon
                      className="absolute -top-2 -right-2 h-6 w-6 cursor-pointer text-black"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    />
                  </figure>
                  <div className="hidden md:block">
                    <h4 className="josefin-regular text-base text-black">
                      {product.title}
                    </h4>
                    <h5 className="josefin-regular mt-1 text-sm text-[#A1A8C1]">
                      {product.category}
                    </h5>
                  </div>
                  <div className="flex items-center justify-self-center md:hidden">
                    <button
                      className="flex h-6 w-6 items-center justify-center bg-[#E7E7EF] text-[#BEBFC2]"
                      onClick={() => dispatch(decrementQuantity(product.id))}
                    >
                      -
                    </button>
                    <span className="flex h-6 w-8 items-center justify-center bg-[#F0EFF2] text-[#BEBFC2]">
                      {product.quantity}
                    </span>
                    <button
                      className="flex h-6 w-6 items-center justify-center bg-[#E7E7EF] text-[#BEBFC2]"
                      onClick={() => dispatch(incrementQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="justify-self-start md:justify-self-center">
                  <h4 className="josefin-regular text-base text-black md:hidden">
                    {product.title}
                  </h4>
                  <h5 className="josefin-regular mt-1 text-sm text-[#A1A8C1] md:hidden">
                    {product.category}
                  </h5>
                  <h4 className="josefin-regular mt-2 hidden text-base text-[#15245E] md:mt-0 md:block">
                    ${product.price}
                  </h4>
                  <h4 className="josefin-regular mt-2 text-base text-[#15245E] md:mt-0 md:hidden">
                    ${product.totalPrice.toFixed(2)}
                  </h4>
                </div>
                <div className="hidden items-center justify-self-center md:flex">
                  <button
                    className="flex h-6 w-6 items-center justify-center bg-[#E7E7EF] text-[#BEBFC2]"
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    -
                  </button>
                  <span className="flex h-6 w-8 items-center justify-center bg-[#F0EFF2] text-[#BEBFC2]">
                    {product.quantity}
                  </span>
                  <button
                    className="flex h-6 w-6 items-center justify-center bg-[#E7E7EF] text-[#BEBFC2]"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
                <div className="hidden justify-self-end md:block">
                  <h4 className="josefin-regular text-base text-[#15245E]">
                    ${product.totalPrice.toFixed(2)}
                  </h4>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div
        className={clsx(
          "text-end",
          cartItems.length === 0 ? "hidden" : "block",
        )}
      >
        <PrimaryButton
          type="button"
          className="josefin-semibold mt-12 py-3 px-7"
          onClick={() => dispatch(resetCart("RESET_CART"))}
        >
          Clear Cart
        </PrimaryButton>
      </div>
    </div>
  );
}
