import Link from "next/link";
import Image from "next/image";
import { PencilIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";

export type ArticleItem = {
  id: number;
  urlToImage: string;
  source: { id: string | null };
  author: string;
  publishedAt: string;
  title: string;
  content: string;
  description: string;
};

type Props = {
  data: { articles: ArticleItem[] };
};

export function BlogContent({ data }: Props) {
  const { articles } = data;

  return (
    <div className="flex-1 space-y-10 max-w-[870px]">
      {articles?.map((article, index) => {
        return (
          <div key={`${article.source.id}-${index}`}>
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
                {article.description}
              </p>
            </div>
            <Link
              href="/blog/single"
              className="block text-lg text-navy-blue lato-bold mt-8"
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
}
