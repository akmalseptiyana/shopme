import Image from "next/image";
import format from "date-fns/format";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { InputText } from "../../components/ui/form/input-text";
import { FormGroup } from "../../components/ui/form/form-group";
import { SocialIcons } from "../ui/social-icons";
import offerProduct1 from "../../public/images/offer-product-1.png";
import offerProduct2 from "../../public/images/offer-product-2.png";
import offerProduct3 from "../../public/images/offer-product-3.png";
import offerProduct4 from "../../public/images/offer-product-4.png";

export function BlogAside({ data }) {
  const { recentPost, saleProduct } = data;

  return (
    <aside>
      <div>
        <label
          htmlFor="search"
          className="text-xl text-navy-blue josefin-semibold"
        >
          Search
        </label>
        <FormGroup className="relative items-center w-[270px]">
          <InputText
            type="text"
            id="search"
            placeholder="Search For Posts"
            className="h-10 pl-2 mt-4"
          />
          <MagnifyingGlassIcon className="w-6 h-6 text-[#CBCBE0] absolute right-4 bottom-2" />
        </FormGroup>
      </div>

      <div className="mt-14">
        <h3 className="text-xl text-navy-blue josefin-semibold">Categories</h3>
        <ul className="grid grid-cols-2 max-w-[270px] gap-3 mt-6">
          <li className="text-base text-off-navy-blue josefin-regular">
            Hobbies (14)
          </li>
          <li className="text-base text-off-navy-blue josefin-regular">
            Technology (21)
          </li>
          <li className="text-base text-off-navy-blue josefin-regular">
            Women (21)
          </li>
          <li className="text-base text-off-navy-blue josefin-regular">
            Productivity (21)
          </li>
          <li className="text-base text-off-navy-blue josefin-regular">
            Family (21)
          </li>
          <li className="text-base text-off-navy-blue josefin-regular">
            Relationships (21)
          </li>
        </ul>
      </div>

      <div className="mt-9">
        <h3 className="text-xl text-navy-blue josefin-semibold">Recent Post</h3>
        <div className="space-y-5 mt-9">
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
                  <h4 className="text-base text-off-navy-blue josefin-semibold max-w-[200px]">
                    {article.title}
                  </h4>
                  <h5 className="text-sm text-sub-text lato-regular">
                    {format(new Date(article.publishedAt), "MMM dd yyyy")}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-9">
        <h3 className="text-xl text-navy-blue josefin-semibold">
          Sale Product
        </h3>
        <div className="space-y-5 mt-9">
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
                  <h4 className="text-base text-off-navy-blue josefin-semibold max-w-[200px]">
                    {article.title}
                  </h4>
                  <h5 className="text-sm text-sub-text lato-regular">
                    {format(new Date(article.publishedAt), "MMM dd yyyy")}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-9">
        <h3 className="text-xl text-navy-blue josefin-semibold">
          Offer product
        </h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 max-w-[300px] justify-items-start mt-9">
          <div className="flex flex-col items-center space-y-2">
            <figure>
              <Image
                src={offerProduct1}
                alt="typewriter"
                className="rounded-sm"
              />
            </figure>
            <div className="text-center">
              <h4 className="text-base text-navy-blue lato-bold">Typewriter</h4>
              <h5 className="text-sm text-sub-text lato-bold">
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
              <h4 className="text-base text-navy-blue lato-bold">Tote Bag</h4>
              <h5 className="text-sm text-sub-text lato-bold">
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
              <h4 className="text-base text-navy-blue lato-bold">Nike Shoes</h4>
              <h5 className="text-sm text-sub-text lato-bold">
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
              <h4 className="text-base text-navy-blue lato-bold">Platea in.</h4>
              <h5 className="text-sm text-sub-text lato-bold">
                $12.00 - $15.00
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <h3 className="text-xl text-navy-blue josefin-semibold mb-4">Follow</h3>
        <SocialIcons className="first:bg-[#5625DF] bg-[#FF27B7] last:bg-[#37DAF3]" />
      </div>

      <div className="mt-9">
        <h3 className="text-xl text-navy-blue josefin-semibold">Tags</h3>
        <ul className="grid grid-cols-3 gap-x-10 gap-y-3 max-w-[250px] mt-4">
          <li className="text-base text-navy-blue lato-regular underline">
            General
          </li>
          <li className="text-base text-navy-blue lato-regular underline">
            Atsanil
          </li>
          <li className="text-base text-navy-blue lato-regular underline">
            Insas
          </li>
          <li className="text-base text-navy-blue lato-regular underline">
            Bibsass
          </li>
          <li className="text-base text-navy-blue lato-regular underline">
            Nulla
          </li>
        </ul>
      </div>
    </aside>
  );
}
