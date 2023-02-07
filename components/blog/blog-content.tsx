import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

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
    <div className="max-w-[870px] flex-1 space-y-10">
      {articles?.map((article, index) => {
        return (
          <div key={`${article.source.id}-${index}`}>
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
                {article.description}
              </p>
            </div>
            <Link
              href="/blog/single"
              className="lato-bold mt-8 block text-lg text-navy-blue"
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
}
