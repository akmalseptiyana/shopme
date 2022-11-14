import Link from "next/link";
import Image from "next/image";
import { PencilIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import imageBlog1 from "../../public/images/blog-1.jpg";
import imageBlog2 from "../../public/images/blog-2.jpg";
import imageBlog3 from "../../public/images/blog-3.jpg";

import { HomepageSection } from "./homepage-section";

export function HomePageLeatestBlog() {
  return (
    <HomepageSection title="Leatest Blog" className="mt-24">
      <div className="flex flex-wrap justify-center gap-14 mt-20">
        <div className="w-[370px] bg-white shadow-lg">
          <figure>
            <Image src={imageBlog1} alt="blog image" className="rounded-lg" />
          </figure>
          <div className="px-4 pt-5 pb-9">
            <div className="flex items-baseline gap-x-7">
              <div className="flex items-center gap-x-2">
                <PencilIcon className="w-3 h-3 text-pink-primary" />
                <span className="text-sm text-navy-blue josefin-regular">
                  SaberAli
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <CalendarDaysIcon className="w-3 h-3 text-[#FFA454]" />
                <span className="text-sm text-navy-blue josefin-regular">
                  21, August,2020
                </span>
              </div>
            </div>
            <h3 className="text-lg text-navy-blue josefin-bold mt-8">
              Top essential Trends in 2021
            </h3>
            <p className="text-base text-[#72718F] lato-regular max-w-[301px] my-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link
              href="#"
              className="text-base text-navy-blue lato-regular border-b border-navy-blue pb-[2px]"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="w-[370px] bg-white shadow-lg">
          <figure>
            <Image src={imageBlog2} alt="blog image" className="rounded-lg" />
          </figure>
          <div className="px-4 pt-5 pb-9">
            <div className="flex items-baseline gap-x-7">
              <div className="flex items-center gap-x-2">
                <PencilIcon className="w-3 h-3 text-pink-primary" />
                <span className="text-sm text-navy-blue josefin-regular">
                  SaberAli
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <CalendarDaysIcon className="w-3 h-3 text-[#FFA454]" />
                <span className="text-sm text-navy-blue josefin-regular">
                  21, August,2020
                </span>
              </div>
            </div>
            <h3 className="text-lg text-navy-blue josefin-bold mt-8">
              Top essential Trends in 2021
            </h3>
            <p className="text-base text-[#72718F] lato-regular max-w-[301px] my-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link
              href="#"
              className="text-base text-navy-blue lato-regular border-b border-navy-blue pb-[2px]"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="w-[370px] bg-white shadow-lg">
          <figure>
            <Image src={imageBlog3} alt="blog image" className="rounded-lg" />
          </figure>
          <div className="px-4 pt-5 pb-9">
            <div className="flex items-baseline gap-x-7">
              <div className="flex items-center gap-x-2">
                <PencilIcon className="w-3 h-3 text-pink-primary" />
                <span className="text-sm text-navy-blue josefin-regular">
                  SaberAli
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <CalendarDaysIcon className="w-3 h-3 text-[#FFA454]" />
                <span className="text-sm text-navy-blue josefin-regular">
                  21, August,2020
                </span>
              </div>
            </div>
            <h3 className="text-lg text-navy-blue josefin-bold mt-8">
              Top essential Trends in 2021
            </h3>
            <p className="text-base text-[#72718F] lato-regular max-w-[301px] my-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link
              href="#"
              className="text-base text-navy-blue lato-regular border-b border-navy-blue pb-[2px]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </HomepageSection>
  );
}
