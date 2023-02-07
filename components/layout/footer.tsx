import { PrimaryButton } from "@/components/ui/button/primary-button";
import { FormGroup } from "@/components/ui/form/form-group";
import { InputText } from "@/components/ui/form/input-text";

import { footer } from "@/constans/footer-data";

import { FooterCopy } from "./footer-copy";

export function Footer() {
  return (
    <footer className="mt-28 bg-shade pt-24">
      <div className="container flex flex-wrap gap-x-28 gap-y-10">
        <div>
          <h3 className="josefin-bold text-4xl text-[#0D0E43]">Shopme</h3>
          <FormGroup className="relative mt-8 max-w-[377px] items-center">
            <InputText
              type="email"
              className=" h-11 w-full rounded-[3px] bg-white pl-5 outline-none md:w-[377px]"
              placeholder="Enter Email Address"
              style={{ border: 0 }}
            />
            <PrimaryButton
              type="submit"
              className="josefin-semibold absolute right-0 py-3 px-10"
            >
              Sign Up
            </PrimaryButton>
          </FormGroup>
          <p className="lato-regular mt-6 pr-4 text-base text-[#8A8FB9]">
            Contact Info <br /> 17 Princess Road, London, Greater London NW1
            8JR, UK
          </p>
        </div>
        {footer?.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="josefin-semibold text-xl text-black">
                {item.heading}
              </h4>
              <ul className="mt-10 space-y-5">
                {item.lists.map((list, index) => (
                  <li
                    key={index}
                    className="lato-regular text-base text-[#8A8FB9]"
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
