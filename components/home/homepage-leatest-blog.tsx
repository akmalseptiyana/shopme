import { CalendarDaysIcon, PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import imageBlog1 from "@/public/assets/images/blog-1.jpg";
import imageBlog2 from "@/public/assets/images/blog-2.jpg";
import imageBlog3 from "@/public/assets/images/blog-3.jpg";

import { HomepageSection } from "@/components/home/homepage-section";

export function HomePageLeatestBlog() {
  return (
    <HomepageSection title="Leatest Blog" className="mt-24">
      <div className="mt-20 flex flex-wrap justify-center gap-14">
        <div className="w-[370px] bg-white shadow-lg">
          <figure>
            <Image src={imageBlog1} alt="blog image" className="rounded-lg" />
          </figure>
          <div className="px-4 pt-5 pb-9">
            <div className="flex items-baseline gap-x-7">
              <div className="flex items-center gap-x-2">
                <PencilIcon className="h-3 w-3 text-pink-primary" />
                <span className="josefin-regular text-sm text-navy-blue">
                  SaberAli
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <CalendarDaysIcon className="h-3 w-3 text-[#FFA454]" />
                <span className="josefin-regular text-sm text-navy-blue">
                  21, August,2020
                </span>
              </div>
            </div>
            <h3 className="josefin-bold mt-8 text-lg text-navy-blue">
              Top essential Trends in 2021
            </h3>
            <p className="lato-regular my-4 max-w-[301px] text-base text-[#72718F]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link
              href="/blog"
              className="lato-regular border-b border-navy-blue pb-[2px] text-base text-navy-blue"
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
                <PencilIcon className="h-3 w-3 text-pink-primary" />
                <span className="josefin-regular text-sm text-navy-blue">
                  SaberAli
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <CalendarDaysIcon className="h-3 w-3 text-[#FFA454]" />
                <span className="josefin-regular text-sm text-navy-blue">
                  21, August,2020
                </span>
              </div>
            </div>
            <h3 className="josefin-bold mt-8 text-lg text-navy-blue">
              Top essential Trends in 2021
            </h3>
            <p className="lato-regular my-4 max-w-[301px] text-base text-[#72718F]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link
              href="/blog"
              className="lato-regular border-b border-navy-blue pb-[2px] text-base text-navy-blue"
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
                <PencilIcon className="h-3 w-3 text-pink-primary" />
                <span className="josefin-regular text-sm text-navy-blue">
                  SaberAli
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <CalendarDaysIcon className="h-3 w-3 text-[#FFA454]" />
                <span className="josefin-regular text-sm text-navy-blue">
                  21, August,2020
                </span>
              </div>
            </div>
            <h3 className="josefin-bold mt-8 text-lg text-navy-blue">
              Top essential Trends in 2021
            </h3>
            <p className="lato-regular my-4 max-w-[301px] text-base text-[#72718F]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link
              href="/blog"
              className="lato-regular border-b border-navy-blue pb-[2px] text-base text-navy-blue"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </HomepageSection>
  );
}
