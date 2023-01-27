import Image from "next/image";

import contact from "@/public/assets/images/contact.svg";

import { PrimaryButton } from "@/components/ui/button/primary-button";
import { FormGroup } from "@/components/ui/form/form-group";
import { InputText } from "@/components/ui/form/input-text";
import { InputTextarea } from "@/components/ui/form/input-textarea";

export function ContactForm() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-20 mt-32">
      <div className="flex-1 pt-10">
        <h3 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
          Get In Touch
        </h3>
        <p className="text-base text-sub-text lato-regular mt-5">
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
            className="h-[45px] pl-3 mt-8 text-sub-text"
          />
          <InputTextarea
            placeholder="Type Your Message*"
            className="pl-3 pt-4  mt-12 text-sub-text"
            rows={5}
          />
          <PrimaryButton
            type="submit"
            className="py-4 px-10 josefin-regular mt-8"
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
