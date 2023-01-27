import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import clsx from "clsx";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { links } from "@/constans/navigation-data";
import { Container } from "@/components/ui/container";

type NavigationLinksProps = {
  isMobileOpen?: boolean;
};

function NavigationLinks({ isMobileOpen }: NavigationLinksProps) {
  const router = useRouter();

  if (isMobileOpen) {
    return (
      <ul className="flex flex-col gap-y-5 mt-16">
        {links.map((link, index) => (
          <li key={index} className="px-4">
            <Link
              href={link.href}
              className={clsx(
                "flex items-center gap-x-1 text-base lato-regular",
                router.pathname === link.href
                  ? "text-pink-primary"
                  : "text-[#0D0E43]"
              )}
            >
              {link.name}
              {link.icon && <link.icon className="w-3 h-3 text-[#0D0E43]" />}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="hidden lg:flex items-center gap-x-9">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={clsx(
              "flex items-center gap-x-1 text-base lato-regular",
              router.pathname === link.href
                ? "text-pink-primary"
                : "text-[#0D0E43]"
            )}
          >
            {link.name}
            {link.icon && <link.icon className="w-3 h-3 text-[#0D0E43]" />}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navigation() {
  const [isMobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <nav className="h-10 flex items-center my-5">
      <Container className="flex items-center">
        <div className="flex flex-1 items-center gap-x-4 xl:gap-x-20">
          <Link href="/" className="text-3xl text-[#0D0E43] josefin-bold">
            Shopme
          </Link>
          <NavigationLinks />
        </div>

        <form className="hidden md:block mr-4 lg:mr-0">
          <label htmlFor="search-field" className="sr-only">
            Search...
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="search-field"
              className="h-10 w-[266px] border-2 border-r-0 border-[#E7E6EF outline-none"
            />
            <button type="submit" className="bg-pink-primary py-2 px-3">
              <MagnifyingGlassIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-x-5">
          <button
            className="md:hidden"
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-[#0D0E43]" />
          </button>
          <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Bars3Icon className="w-6 h-6 text-[#0D0E43]" />
          </button>
        </div>
      </Container>

      {/* mobile */}
      <div
        className={clsx(
          "w-[280px] h-screen bg-[#F6F5FF] fixed top-0 transition-all ease-in-out duration-300 z-50 lg:hidden",
          isMobileOpen ? "right-0" : "-right-full"
        )}
      >
        <button onClick={() => setMobileOpen(false)}>
          <XMarkIcon className="w-6 h-6 text-[#0D0E43] absolute top-5 right-5" />
        </button>
        <NavigationLinks isMobileOpen={isMobileOpen} />
      </div>

      <form
        className={clsx(
          "fixed left-0 right-0 transition-all ease-in-out duration-200 z-20 md:hidden",
          isSearchOpen ? "top-0" : "-top-full"
        )}
      >
        <label htmlFor="search-field-mobile" className="sr-only">
          Search...
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="search-field-mobile"
            className="h-10 w-full border-2 border-r-0 border-[#E7E6EF outline-none"
          />
          <button type="submit" className="bg-pink-primary py-2 px-3">
            <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </form>
    </nav>
  );
}
