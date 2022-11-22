import Image from "next/image";
import { format } from "date-fns";
import { PencilIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

import singleblog1 from "../../public/images/single-blog-1.png";
import singleblog2 from "../../public/images/single-blog-2.png";
import singleblog3 from "../../public/images/single-blog-3.png";
import singleblog4 from "../../public/images/single-blog-4.png";
import { FormGroup } from "../ui/form/form-group";
import { InputText } from "../ui/form/input-text";
import { InputTextarea } from "../ui/form/input-textarea";
import { InputCheckbox } from "../ui/form/input-checkbox";
import { PrimaryButton } from "../ui/button/primary-button";

export function Single({ data }) {
  const { articles } = data;

  return (
    <div className="flex-1 max-w-[870px]">
      {articles?.map((article) => {
        return (
          <div key={article.id}>
            <figure className="relative w-full lg:w-[870px] h-[453px]">
              <Image
                src={article.urlToImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </figure>
            <div className="flex items-center gap-x-7 mt-7">
              <div className="flex items-center space-x-2">
                <PencilIcon className="w-4 h-4 text-pink-primary" />
                <span className="text-sm text-navy-blue josefin-regular py-1 px-4 md:px-11 rounded bg-[#FFE7F9]">
                  {article.author}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDaysIcon className="w-4 h-4 text-[#FFA454]" />
                <span className="text-sm text-navy-blue lato-bold py-1 px-4 md:px-11 rounded bg-[#FFECE2]">
                  {format(new Date(article.publishedAt), "MMM dd yyyy")}
                </span>
              </div>
            </div>
            <div className="max-w-[852px] mt-7">
              <h3 className="text-3xl text-navy-blue josefin-bold ">
                {article.title}
              </h3>
              <p className="text-base text-sub-text lato-regular mt-6">
                {article.content}
              </p>
            </div>
            <blockquote className="bg-[#FAFAFB] pt-9 pr-5 pb-4 pl-4 mt-20 border-l-2 border-[#FC45A0]">
              <p className="text-lg text-[#969CB4] josefin-semibold">
                “The best and most beautiful things in the world cannot be seen
                or even touched — they must be felt with the heart.”
              </p>
            </blockquote>
          </div>
        );
      })}

      <div className="flex flex-wrap justify-center gap-x-2 mt-12 mb-14">
        <div>
          <figure>
            <Image src={singleblog1} alt="sofa" />
          </figure>
          <h4 className="text-xl text-black josefin-regular text-center mt-4">
            Quam sed
          </h4>
          <div className="flex items-center gap-x-2 mt-4">
            <h5 className="text-sm text-[#232A69] josefin-regular">$32.00</h5>
            <h6 className="text-sm text-[#FF38B0] josefin-regular">$56.00</h6>
          </div>
        </div>
        <div>
          <figure>
            <Image src={singleblog2} alt="bowl" />
          </figure>
          <h4 className="text-xl text-black josefin-regular text-center mt-4">
            Quam sed
          </h4>
          <div className="flex items-center gap-x-2 mt-4">
            <h5 className="text-sm text-[#232A69] josefin-regular">$32.00</h5>
            <h6 className="text-sm text-[#FF38B0] josefin-regular">$56.00</h6>
          </div>
        </div>
        <div>
          <figure>
            <Image src={singleblog3} alt="t-shirt" />
          </figure>
          <h4 className="text-xl text-black josefin-regular text-center mt-4">
            Quam sed
          </h4>
          <div className="flex items-center gap-x-2 mt-4">
            <h5 className="text-sm text-[#232A69] josefin-regular">$32.00</h5>
            <h6 className="text-sm text-[#FF38B0] josefin-regular">$56.00</h6>
          </div>
        </div>
        <div>
          <figure>
            <Image src={singleblog4} alt="chair" />
          </figure>
          <h4 className="text-xl text-black josefin-regular text-center mt-4">
            Quam sed
          </h4>
          <div className="flex items-center gap-x-2 mt-4">
            <h5 className="text-sm text-[#232A69] josefin-regular">$32.00</h5>
            <h6 className="text-sm text-[#FF38B0] josefin-regular">$56.00</h6>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F7F8FB]"></div>

      <form className="max-w-[717px] mt-20">
        <FormGroup className="gap-x-8">
          <InputText
            type="text"
            placeholder="Your Name*"
            className="h-10 pl-2"
          />
          <InputText
            type="email"
            placeholder="Write Your Email*"
            className="h-10 pl-2"
          />
        </FormGroup>
        <InputTextarea
          placeholder="Write your comment*"
          className="pl-5 pt-6 mt-11"
          rows={8}
        />
        <FormGroup className="items-center space-x-2 mt-5">
          <InputCheckbox id="checkbox" />
          <label
            htmlFor="checkbox"
            className="text-sm text-[#8A91AB] lato-regular"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </FormGroup>
        <PrimaryButton
          type="submit"
          className="py-4 w-full mt-16 josefin-semibold"
        >
          Continue Shipping
        </PrimaryButton>
      </form>
    </div>
  );
}
