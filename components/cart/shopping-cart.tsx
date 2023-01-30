import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { XCircleIcon } from "@heroicons/react/24/solid";

import { AppDispatch, RootState } from "@/store/store";
import {
  incrementQuantity,
  decrementQuantity,
  resetCart,
  removeFromCart,
} from "@/store/slices/cartSlice";
import { PrimaryButton } from "@/components/ui/button/primary-button";
import { Product } from "@/store/slices/cartSlice";

export function ShoppingCart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems: any = useSelector<RootState>(
    (state) => state.cart.itemsList
  );

  return (
    <div className="flex-auto max-w-[800px]">
      <div className="hidden md:grid grid-cols-cart">
        <h3 className="text-xl text-[#1D3178] josefin-bold">Product</h3>
        <h3 className="text-xl text-[#1D3178] josefin-bold justify-self-center">
          Price
        </h3>
        <h3 className="text-xl text-[#1D3178] josefin-bold justify-self-center">
          Quantity
        </h3>
        <h3 className="text-xl text-[#1D3178] josefin-bold justify-self-end">
          Total
        </h3>
      </div>
      <div className="space-y-4 mt-12">
        {cartItems.length === 0 ? (
          <p className="text-base text-[#A1A8C1] lato-regular text-center">
            Cart empty.{" "}
            <Link href="/products" className="underline">
              Shop Now
            </Link>
          </p>
        ) : (
          cartItems.map((product: Product) => {
            return (
              <div
                key={product.id}
                className="grid grid-cols-cart-mobile md:grid-cols-cart items-center gap-x-5 md:gap-0 border-b border-[#E1E1E4] pb-4"
              >
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <figure className="relative w-[83px] h-[87px] bg-white shrink-0">
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
                      className="w-6 h-6 text-black absolute -top-2 -right-2 cursor-pointer"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    />
                  </figure>
                  <div className="hidden md:block">
                    <h4 className="text-base text-black josefin-regular">
                      {product.title}
                    </h4>
                    <h5 className="text-sm text-[#A1A8C1] josefin-regular mt-1">
                      {product.category}
                    </h5>
                  </div>
                  <div className="flex items-center justify-self-center md:hidden">
                    <button
                      className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]"
                      onClick={() => dispatch(decrementQuantity(product.id))}
                    >
                      -
                    </button>
                    <span className="flex items-center justify-center text-[#BEBFC2] w-8 h-6 bg-[#F0EFF2]">
                      {product.quantity}
                    </span>
                    <button
                      className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]"
                      onClick={() => dispatch(incrementQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="justify-self-start md:justify-self-center">
                  <h4 className="md:hidden text-base text-black josefin-regular">
                    {product.title}
                  </h4>
                  <h5 className="md:hidden text-sm text-[#A1A8C1] josefin-regular mt-1">
                    {product.category}
                  </h5>
                  <h4 className="hidden md:block text-base text-[#15245E] josefin-regular mt-2 md:mt-0">
                    ${product.price}
                  </h4>
                  <h4 className="md:hidden text-base text-[#15245E] josefin-regular mt-2 md:mt-0">
                    ${product.totalPrice.toFixed(2)}
                  </h4>
                </div>
                <div className="hidden md:flex items-center justify-self-center">
                  <button
                    className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]"
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    -
                  </button>
                  <span className="flex items-center justify-center text-[#BEBFC2] w-8 h-6 bg-[#F0EFF2]">
                    {product.quantity}
                  </span>
                  <button
                    className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
                <div className="justify-self-end hidden md:block">
                  <h4 className="text-base text-[#15245E] josefin-regular">
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
          cartItems.length === 0 ? "hidden" : "block"
        )}
      >
        <PrimaryButton
          type="button"
          className="py-3 px-7 josefin-semibold mt-12"
          onClick={() => dispatch(resetCart("RESET_CART"))}
        >
          Clear Cart
        </PrimaryButton>
      </div>
    </div>
  );
}
