import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import format from "date-fns/format";
import Image from "next/image";

import { FormGroup } from "@/components/ui/form/form-group";
import { InputText } from "@/components/ui/form/input-text";
import { SocialIcons } from "@/components/ui/social-icons";

import offerProduct1 from "@/public/assets/images/offer-product-1.png";
import offerProduct2 from "@/public/assets/images/offer-product-2.png";
import offerProduct3 from "@/public/assets/images/offer-product-3.png";
import offerProduct4 from "@/public/assets/images/offer-product-4.png";

import { ArticleItem } from "./blog-content";

type Props = {
  data: {
    recentPost: { articles: ArticleItem[] };
    saleProduct: { articles: ArticleItem[] };
  };
};

export function BlogAside({ data }: Props) {
  const { recentPost, saleProduct } = data;

  return (
    <aside>
      <div>
        <label
          htmlFor="search"
          className="josefin-semibold text-xl text-navy-blue"
        >
          Search
        </label>
        <FormGroup className="relative w-[270px] items-center">
          <InputText
            type="text"
            id="search"
            placeholder="Search For Posts"
            className="mt-4 h-10 pl-2"
          />
          <MagnifyingGlassIcon className="absolute right-4 bottom-2 h-6 w-6 text-[#CBCBE0]" />
        </FormGroup>
      </div>

      <div className="mt-14">
        <h3 className="josefin-semibold text-xl text-navy-blue">Categories</h3>
        <ul className="mt-6 grid max-w-[270px] grid-cols-2 gap-3">
          <li className="josefin-regular text-base text-off-navy-blue">
            Hobbies (14)
          </li>
          <li className="josefin-regular text-base text-off-navy-blue">
            Technology (21)
          </li>
          <li className="josefin-regular text-base text-off-navy-blue">
            Women (21)
          </li>
          <li className="josefin-regular text-base text-off-navy-blue">
            Productivity (21)
          </li>
          <li className="josefin-regular text-base text-off-navy-blue">
            Family (21)
          </li>
          <li className="josefin-regular text-base text-off-navy-blue">
            Relationships (21)
          </li>
        </ul>
      </div>

      <div className="mt-9">
        <h3 className="josefin-semibold text-xl text-navy-blue">Recent Post</h3>
        <div className="mt-9 space-y-5">
          {recentPost?.articles?.map((article, index) => {
            return (
              <div
                key={`${article.source.id}-${index}`}
                className="flex items-center gap-x-2"
              >
                <figure>
                  <Image
                    src={article.urlToImage}
                    alt=""
                    width={70}
                    height={51}
                    style={{ objectFit: "contain" }}
                  />
                </figure>
                <div>
                  <h4 className="josefin-semibold max-w-[200px] text-base text-off-navy-blue">
                    {article.title}
                  </h4>
                  <h5 className="lato-regular text-sm text-sub-text">
                    {format(new Date(article.publishedAt), "MMM dd yyyy")}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-9">
        <h3 className="josefin-semibold text-xl text-navy-blue">
          Sale Product
        </h3>
        <div className="mt-9 space-y-5">
          {saleProduct?.articles?.map((article, index) => {
            return (
              <div
                key={`${article.source.id}-${index}`}
                className="flex items-center gap-x-2"
              >
                <figure>
                  <Image
                    src={article.urlToImage}
                    alt=""
                    width={70}
                    height={51}
                    style={{ objectFit: "contain" }}
                    className="rounded-[3px]"
                  />
                </figure>
                <div>
                  <h4 className="josefin-semibold max-w-[200px] text-base text-off-navy-blue">
                    {article.title}
                  </h4>
                  <h5 className="lato-regular text-sm text-sub-text">
                    {format(new Date(article.publishedAt), "MMM dd yyyy")}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-9">
        <h3 className="josefin-semibold text-xl text-navy-blue">
          Offer product
        </h3>
        <div className="mt-9 grid max-w-[300px] grid-cols-2 justify-items-start gap-x-4 gap-y-12">
          <div className="flex flex-col items-center space-y-2">
            <figure>
              <Image
                src={offerProduct1}
                alt="typewriter"
                className="rounded-sm"
              />
            </figure>
            <div className="text-center">
              <h4 className="lato-bold text-base text-navy-blue">Typewriter</h4>
              <h5 className="lato-bold text-sm text-sub-text">
                $12.00 - $15.00
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <figure>
              <Image
                src={offerProduct2}
                alt="Tote Bag"
                className="rounded-sm"
              />
            </figure>
            <div className="text-center">
              <h4 className="lato-bold text-base text-navy-blue">Tote Bag</h4>
              <h5 className="lato-bold text-sm text-sub-text">
                $12.00 - $15.00
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <figure>
              <Image
                src={offerProduct3}
                alt="nike shoes"
                className="rounded-sm"
              />
            </figure>
            <div className="text-center">
              <h4 className="lato-bold text-base text-navy-blue">Nike Shoes</h4>
              <h5 className="lato-bold text-sm text-sub-text">
                $12.00 - $15.00
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <figure>
              <Image
                src={offerProduct4}
                alt="platea in"
                className="rounded-sm"
              />
            </figure>
            <div className="text-center">
              <h4 className="lato-bold text-base text-navy-blue">Platea in.</h4>
              <h5 className="lato-bold text-sm text-sub-text">
                $12.00 - $15.00
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <h3 className="josefin-semibold mb-4 text-xl text-navy-blue">Follow</h3>
        <SocialIcons className="bg-[#FF27B7] first:bg-[#5625DF] last:bg-[#37DAF3]" />
      </div>

      <div className="mt-9">
        <h3 className="josefin-semibold text-xl text-navy-blue">Tags</h3>
        <ul className="mt-4 grid max-w-[250px] grid-cols-3 gap-x-10 gap-y-3">
          <li className="lato-regular text-base text-navy-blue underline">
            General
          </li>
          <li className="lato-regular text-base text-navy-blue underline">
            Atsanil
          </li>
          <li className="lato-regular text-base text-navy-blue underline">
            Insas
          </li>
          <li className="lato-regular text-base text-navy-blue underline">
            Bibsass
          </li>
          <li className="lato-regular text-base text-navy-blue underline">
            Nulla
          </li>
        </ul>
      </div>
    </aside>
  );
}
