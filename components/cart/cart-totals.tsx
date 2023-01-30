import { ChangeEvent, useState } from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "@/store/store";
import { calculateTax, resetCart, resetTax } from "@/store/slices/cartSlice";
import { FormGroup } from "@/components/ui/form/form-group";
import { InputCheckbox } from "@/components/ui/form/input-checkbox";
import { PrimaryButton } from "@/components/ui/button/primary-button";

export function CartTotals() {
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);
  const subTotals = useSelector((state: RootState) => state.cart.subTotals);
  const totals = useSelector((state: RootState) => state.cart.totals);

  function handleTax(e: ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;

    if (isChecked && cartItems.length > 0) {
      dispatch(calculateTax("CALCULATE_TAX"));
      setDisabled(false);
    } else {
      dispatch(resetTax("RESET_TAX"));
      setDisabled(true);
    }
  }

  function handleSubmit() {
    if (!disabled) {
      Router.push("/completed");
      dispatch(resetCart("RESET_CART"));
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
            ${subTotals.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center border-b-2 border-[#E8E6F1] pb-3 mt-8">
          <h4 className="text-lg text-[#1D3178] josefin-semibold flex-1">
            Totals:
          </h4>
          <span className="text-base text-[#15245E] lato-regular">
            ${disabled ? subTotals.toFixed(2) : totals.toFixed(2)}
          </span>
        </div>
        <FormGroup className="items-center gap-x-2 mt-7">
          <InputCheckbox onChange={(e) => handleTax(e)} />
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
