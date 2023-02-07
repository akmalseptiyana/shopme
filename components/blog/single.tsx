import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import Image from "next/image";

import { PrimaryButton } from "@/components/ui/button/primary-button";
import { FormGroup } from "@/components/ui/form/form-group";
import { InputCheckbox } from "@/components/ui/form/input-checkbox";
import { InputText } from "@/components/ui/form/input-text";
import { InputTextarea } from "@/components/ui/form/input-textarea";

import singleblog1 from "@/public/assets/images/single-blog-1.png";
import singleblog2 from "@/public/assets/images/single-blog-2.png";
import singleblog3 from "@/public/assets/images/single-blog-3.png";
import singleblog4 from "@/public/assets/images/single-blog-4.png";

import { ArticleItem } from "./blog-content";

type Props = {
  data: { articles: ArticleItem[] };
};

export function Single({ data }: Props) {
  const { articles } = data;

  return (
    <div className="max-w-[870px] flex-1">
      {articles?.map((article) => {
        return (
          <div key={article.id}>
            <figure className="relative h-[453px] w-full lg:w-[870px]">
              <Image
                src={article.urlToImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </figure>
            <div className="mt-7 flex items-center gap-x-7">
              <div className="flex items-center space-x-2">
                <PencilIcon className="h-4 w-4 text-pink-primary" />
                <span className="josefin-regular rounded bg-[#FFE7F9] py-1 px-4 text-sm text-navy-blue md:px-11">
                  {article.author}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDaysIcon className="h-4 w-4 text-[#FFA454]" />
                <span className="lato-bold rounded bg-[#FFECE2] py-1 px-4 text-sm text-navy-blue md:px-11">
                  {format(new Date(article.publishedAt), "MMM dd yyyy")}
                </span>
              </div>
            </div>
            <div className="mt-7 max-w-[852px]">
              <h3 className="josefin-bold text-3xl text-navy-blue ">
                {article.title}
              </h3>
              <p className="lato-regular mt-6 text-base text-sub-text">
                {article.content}
              </p>
            </div>
            <blockquote className="mt-20 border-l-2 border-[#FC45A0] bg-[#FAFAFB] pt-9 pr-5 pb-4 pl-4">
              <p className="josefin-semibold text-lg text-[#969CB4]">
                “The best and most beautiful things in the world cannot be seen
                or even touched — they must be felt with the heart.”
              </p>
            </blockquote>
          </div>
        );
      })}

      <div className="mt-12 mb-14 flex flex-wrap justify-center gap-x-2">
        <div>
          <figure>
            <Image src={singleblog1} alt="sofa" />
          </figure>
          <h4 className="josefin-regular mt-4 text-center text-xl text-black">
            Quam sed
          </h4>
          <div className="mt-4 flex items-center gap-x-2">
            <h5 className="josefin-regular text-sm text-[#232A69]">$32.00</h5>
            <h6 className="josefin-regular text-sm text-[#FF38B0]">$56.00</h6>
          </div>
        </div>
        <div>
          <figure>
            <Image src={singleblog2} alt="bowl" />
          </figure>
          <h4 className="josefin-regular mt-4 text-center text-xl text-black">
            Quam sed
          </h4>
          <div className="mt-4 flex items-center gap-x-2">
            <h5 className="josefin-regular text-sm text-[#232A69]">$32.00</h5>
            <h6 className="josefin-regular text-sm text-[#FF38B0]">$56.00</h6>
          </div>
        </div>
        <div>
          <figure>
            <Image src={singleblog3} alt="t-shirt" />
          </figure>
          <h4 className="josefin-regular mt-4 text-center text-xl text-black">
            Quam sed
          </h4>
          <div className="mt-4 flex items-center gap-x-2">
            <h5 className="josefin-regular text-sm text-[#232A69]">$32.00</h5>
            <h6 className="josefin-regular text-sm text-[#FF38B0]">$56.00</h6>
          </div>
        </div>
        <div>
          <figure>
            <Image src={singleblog4} alt="chair" />
          </figure>
          <h4 className="josefin-regular mt-4 text-center text-xl text-black">
            Quam sed
          </h4>
          <div className="mt-4 flex items-center gap-x-2">
            <h5 className="josefin-regular text-sm text-[#232A69]">$32.00</h5>
            <h6 className="josefin-regular text-sm text-[#FF38B0]">$56.00</h6>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F7F8FB]"></div>

      <form className="mt-20 max-w-[717px]">
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
          className="mt-11 pl-5 pt-6"
          rows={8}
        />
        <FormGroup className="mt-5 items-center space-x-2">
          <InputCheckbox id="checkbox" />
          <label
            htmlFor="checkbox"
            className="lato-regular text-sm text-[#8A91AB]"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </FormGroup>
        <PrimaryButton
          type="submit"
          className="josefin-semibold mt-16 w-full py-4"
        >
          Continue Shipping
        </PrimaryButton>
      </form>
    </div>
  );
}
