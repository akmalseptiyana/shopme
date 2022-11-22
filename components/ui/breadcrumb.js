import clsx from "clsx";
import Link from "next/link";

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mt-24">
      <h2 className="text-4xl text-[#101750] josefin-bold">
        {items?.map((item) => (item.current ? item.name : null))}
      </h2>
      <ol className="flex items-center breadcrumb">
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
