import { ChangeEvent, useState } from "react";
import Router from "next/router";

import { FormGroup } from "@/components/ui/form/form-group";
import { InputCheckbox } from "@/components/ui/form/input-checkbox";
import { PrimaryButton } from "@/components/ui/button/primary-button";
import { Product, useCart } from "@/lib/hooks/cart-context";

export function CartTotals() {
  const [calculateTax, setCalculateTax] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { state, dispatch } = useCart();

  const tax = 10;
  const subTotal: number = +Object.keys(state.cart)
    ?.reduce((prev, key) => {
      const product: Product = state.cart[key as keyof typeof state.cart];
      prev += product.price * product.quantity;
      return prev;
    }, 0)
    .toFixed(2);
  let total = ((subTotal * tax) / 100 + Number(subTotal)).toFixed(2);

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;

    if (isChecked) {
      setCalculateTax(true);
      if (Object.keys(state.cart).length > 0) {
        setDisabled(false);
      }
    } else {
      setCalculateTax(false);
      setDisabled(true);
    }
  }

  function handleSubmit() {
    if (calculateTax && Object.keys(state.cart).length > 0) {
      Router.push("/completed");
      dispatch({ type: "RESET_CART" });
    }
  }

  return (
    <div>
      <h3 className="text-xl text-[#1D3178] josefin-bold text-center">
        Cart Totals
      </h3>
      <div className="w-full lg:w-[374px] h-[284px] bg-[#F4F4FC] py-8 px-7 rounded-[3px] mt-10">
        <div className="flex items-center border-b-2 border-[#E8E6F1] pb-3">
          <h4 className="text-lg text-[#1D3178] josefin-semibold flex-1">
            Subtotals:
          </h4>
          <span className="text-base text-[#15245E] lato-regular">
            ${subTotal}
          </span>
        </div>
        <div className="flex items-center border-b-2 border-[#E8E6F1] pb-3 mt-8">
          <h4 className="text-lg text-[#1D3178] josefin-semibold flex-1">
            Totals:
          </h4>
          <span className="text-base text-[#15245E] lato-regular">
            ${calculateTax ? total : subTotal}
          </span>
        </div>
        <FormGroup className="items-center gap-x-2 mt-7">
          <InputCheckbox onChange={(e) => handleCheckbox(e)} />
          <label
            htmlFor="checkout"
            className="text-sm text-[#8A91AB] lato-regular"
          >
            Shipping & taxes calculated at checkout
          </label>
        </FormGroup>
        <PrimaryButton
          type="button"
          color="bg-[#19D16F]"
          className="w-full py-3 lato-bold mt-8 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={disabled}
          onClick={() => handleSubmit()}
        >
          Proced To Checkout
        </PrimaryButton>
      </div>
    </div>
  );
}
