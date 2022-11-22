import { XCircleIcon } from "@heroicons/react/24/solid";

import { PrimaryButton } from "../ui/button/primary-button";

export function ShoppingCart() {
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
        <div className="grid grid-cols-cart-mobile md:grid-cols-cart items-center gap-x-5 md:gap-0 border-b border-[#E1E1E4] pb-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <figure className="relative w-[83px] h-[87px] bg-gray-200 rounded-[3px] shrink-0">
              <XCircleIcon className="w-6 h-6 text-black absolute -top-2 -right-2" />
            </figure>
            <div className="hidden md:block">
              <h4 className="text-base text-black josefin-regular">
                Ut diam consequat
              </h4>
              <h5 className="text-sm text-[#A1A8C1] josefin-regular mt-1">
                Electronics
              </h5>
            </div>
            <div className="flex items-center justify-self-center md:hidden">
              <button className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]">
                -
              </button>
              <span className="flex items-center justify-center text-[#BEBFC2] w-8 h-6 bg-[#F0EFF2]">
                1
              </span>
              <button className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]">
                +
              </button>
            </div>
          </div>
          <div className="justify-self-start md:justify-self-center">
            <h4 className="md:hidden text-base text-black josefin-regular">
              Ut diam consequat
            </h4>
            <h5 className="md:hidden text-sm text-[#A1A8C1] josefin-regular mt-1">
              Electronics
            </h5>
            <h4 className="text-base text-[#15245E] josefin-regular mt-2 md:mt-0">
              $32.00
            </h4>
          </div>
          <div className="hidden md:flex items-center justify-self-center">
            <button className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]">
              -
            </button>
            <span className="flex items-center justify-center text-[#BEBFC2] w-8 h-6 bg-[#F0EFF2]">
              1
            </span>
            <button className="flex items-center justify-center text-[#BEBFC2] w-6 h-6 bg-[#E7E7EF]">
              +
            </button>
          </div>
          <div className="justify-self-end hidden md:block">
            <h4 className="text-base text-[#15245E] josefin-regular">$1000</h4>
          </div>
        </div>
      </div>

      <div className="text-end">
        <PrimaryButton className="py-3 px-7 josefin-semibold mt-12">
          Clear Cart
        </PrimaryButton>
      </div>
    </div>
  );
}
