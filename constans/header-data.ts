import { ComponentType, SVGProps } from "react";
import {
  EnvelopeIcon,
  PhoneArrowUpRightIcon,
  ChevronDownIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

type DataLeftItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

type DataRightItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  href?: string;
};

const dataLeft: DataLeftItem[] = [
  { icon: EnvelopeIcon, text: "Shopme@gmail.com" },
  { icon: PhoneArrowUpRightIcon, text: "(12345)56890" },
];

const dataRight: DataRightItem[] = [
  { icon: ChevronDownIcon, text: "English" },
  { icon: ChevronDownIcon, text: "USD" },
  { icon: UserIcon, text: "Login", href: "/login" },
  { icon: HeartIcon, text: "Wishlist", href: "/wishlist" },
];

export { dataLeft, dataRight };
