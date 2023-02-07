import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ComponentType, SVGProps } from "react";

type LinkItem = {
  name: string;
  href: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

const links: LinkItem[] = [
  { name: "Home", href: "/", icon: ChevronDownIcon },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export { links };
