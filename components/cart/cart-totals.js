import { FormGroup } from "../ui/form/form-group";
import { InputCheckbox } from "../ui/form/input-checkbox";
import { PrimaryButton } from "../ui/button/primary-button";

export function CartTotals() {
  return (
    <div>
      <div>
        <h3 className="text-xl text-[#1D3178] josefin-bold text-center">
          Cart Totals
        </h3>
        <div className="w-full sm:w-[374px] h-[284px] bg-[#F4F4FC] py-8 px-7 rounded-[3px] mt-10">
          <div className="flex items-center border-b-2 border-[#E8E6F1] pb-3">
            <h4 className="text-lg text-[#1D3178] josefin-semibold flex-1">
              Subtotals:
            </h4>
            <span className="text-base text-[#15245E] lato-regular">
              $50.00
            </span>
          </div>
          <div className="flex items-center border-b-2 border-[#E8E6F1] pb-3 mt-8">
            <h4 className="text-lg text-[#1D3178] josefin-semibold flex-1">
              Totals:
            </h4>
            <span className="text-base text-[#15245E] lato-regular">
              $50.00
            </span>
          </div>
          <FormGroup className="items-center gap-x-2 mt-7">
            <InputCheckbox />
            <label
              htmlFor="checkout"
              className="text-sm text-[#8A91AB] lato-regular"
            >
              Shipping & taxes calculated at checkout
            </label>
          </FormGroup>
          <PrimaryButton
            color="bg-[#19D16F]"
            className="w-full py-3 lato-bold mt-8"
          >
            Proced To Checkout
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
