import Router from "next/router";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PrimaryButton } from "@/components/ui/button/primary-button";
import { FormGroup } from "@/components/ui/form/form-group";
import { InputCheckbox } from "@/components/ui/form/input-checkbox";

import { calculateTax, resetCart, resetTax } from "@/store/slices/cartSlice";
import { AppDispatch, RootState } from "@/store/store";

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
      <h3 className="josefin-bold text-center text-xl text-[#1D3178]">
        Cart Totals
      </h3>
      <div className="mt-10 h-[284px] w-full rounded-[3px] bg-[#F4F4FC] py-8 px-7 lg:w-[374px]">
        <div className="flex items-center border-b-2 border-[#E8E6F1] pb-3">
          <h4 className="josefin-semibold flex-1 text-lg text-[#1D3178]">
            Subtotals:
          </h4>
          <span className="lato-regular text-base text-[#15245E]">
            ${subTotals.toFixed(2)}
          </span>
        </div>
        <div className="mt-8 flex items-center border-b-2 border-[#E8E6F1] pb-3">
          <h4 className="josefin-semibold flex-1 text-lg text-[#1D3178]">
            Totals:
          </h4>
          <span className="lato-regular text-base text-[#15245E]">
            ${disabled ? subTotals.toFixed(2) : totals.toFixed(2)}
          </span>
        </div>
        <FormGroup className="mt-7 items-center gap-x-2">
          <InputCheckbox onChange={(e) => handleTax(e)} />
          <label
            htmlFor="checkout"
            className="lato-regular text-sm text-[#8A91AB]"
          >
            Shipping & taxes calculated at checkout
          </label>
        </FormGroup>
        <PrimaryButton
          type="button"
          color="bg-[#19D16F]"
          className="lato-bold mt-8 w-full py-3 disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={disabled}
          onClick={() => handleSubmit()}
        >
          Proced To Checkout
        </PrimaryButton>
      </div>
    </div>
  );
}
