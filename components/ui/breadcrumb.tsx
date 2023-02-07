import clsx from "clsx";
import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  href: string;
  current?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mt-24">
      <h2 className="josefin-bold text-4xl text-[#101750]">
        {items?.map((item) => (item.current ? item.name : null))}
      </h2>
      <ol className="breadcrumb flex items-center">
        {items?.map(({ name, href, current }) => {
          return (
            <li key={name}>
              <Link
                href={href}
                className={clsx(current && "text-pink-primary")}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
