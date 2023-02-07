import Image from "next/image";

import { PrimaryButton } from "@/components/ui/button/primary-button";
import { FormGroup } from "@/components/ui/form/form-group";
import { InputText } from "@/components/ui/form/input-text";
import { InputTextarea } from "@/components/ui/form/input-textarea";

import contact from "@/public/assets/images/contact.svg";

export function ContactForm() {
  return (
    <div className="mt-32 flex flex-wrap gap-x-4 gap-y-20">
      <div className="flex-1 pt-10">
        <h3 className="josefin-bold text-3xl text-navy-blue md:text-4xl">
          Get In Touch
        </h3>
        <p className="lato-regular mt-5 text-base text-sub-text">
          To get in touch, please contact me at [insert contact information]. I
          would be happy to answer any questions or concerns you may have. Thank
          you.
        </p>
        <form className="mt-11">
          <FormGroup className="gap-x-6">
            <InputText
              type="text"
              placeholder="Your Name*"
              className="h-[45px] pl-3 text-sub-text"
            />
            <InputText
              type="email"
              placeholder="Your E-mail"
              className="h-[45px] pl-3 text-sub-text"
            />
          </FormGroup>
          <InputText
            type="text"
            placeholder="Subject*"
            className="mt-8 h-[45px] pl-3 text-sub-text"
          />
          <InputTextarea
            placeholder="Type Your Message*"
            className="mt-12 pl-3  pt-4 text-sub-text"
            rows={5}
          />
          <PrimaryButton
            type="submit"
            className="josefin-regular mt-8 py-4 px-10"
          >
            Send Mail
          </PrimaryButton>
        </form>
      </div>
      <figure>
        <Image src={contact} alt="contact image" />
      </figure>
    </div>
  );
}
