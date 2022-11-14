import { PrimaryButton } from "../ui/button/primary-button";
import { FormGroup } from "../ui/form/form-group";
import { InputText } from "../ui/form/input-text";
import { footer } from "../../constans/footer-data";
import { FooterCopy } from "./footer-copy";

export function Footer() {
  return (
    <footer className="bg-shade pt-24 mt-28">
      <div className="container flex flex-wrap gap-x-28 gap-y-10">
        <div>
          <h3 className="text-4xl text-[#0D0E43] josefin-bold">Shopme</h3>
          <FormGroup className="relative items-center max-w-[377px] mt-8">
            <InputText
              type="email"
              className=" w-full md:w-[377px] h-11 bg-white rounded-[3px] outline-none pl-5"
              placeholder="Enter Email Address"
            />
            <PrimaryButton
              type="submit"
              className="py-3 px-10 josefin-semibold absolute right-0"
            >
              Sign Up
            </PrimaryButton>
          </FormGroup>
          <p className="text-base text-[#8A8FB9] lato-regular pr-4 mt-6">
            Contact Info <br /> 17 Princess Road, London, Greater London NW1
            8JR, UK
          </p>
        </div>
        {footer?.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="text-black text-xl josefin-semibold">
                {item.heading}
              </h4>
              <ul className="mt-10 space-y-5">
                {item.lists.map((list, index) => (
                  <li
                    key={index}
                    className="text-[#8A8FB9] text-base lato-regular"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <FooterCopy />
    </footer>
  );
}
