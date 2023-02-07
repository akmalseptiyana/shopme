import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Container } from "@/components/ui/container";

import { links } from "@/constans/navigation-data";

type NavigationLinksProps = {
  isMobileOpen?: boolean;
};

function NavigationLinks({ isMobileOpen }: NavigationLinksProps) {
  const router = useRouter();

  if (isMobileOpen) {
    return (
      <ul className="mt-16 flex flex-col gap-y-5">
        {links.map((link, index) => (
          <li key={index} className="px-4">
            <Link
              href={link.href}
              className={clsx(
                "lato-regular flex items-center gap-x-1 text-base",
                router.pathname === link.href
                  ? "text-pink-primary"
                  : "text-[#0D0E43]",
              )}
            >
              {link.name}
              {link.icon && <link.icon className="h-3 w-3 text-[#0D0E43]" />}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="hidden items-center gap-x-9 lg:flex">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={clsx(
              "lato-regular flex items-center gap-x-1 text-base",
              router.pathname === link.href
                ? "text-pink-primary"
                : "text-[#0D0E43]",
            )}
          >
            {link.name}
            {link.icon && <link.icon className="h-3 w-3 text-[#0D0E43]" />}
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
    <nav className="my-5 flex h-10 items-center">
      <Container className="flex items-center">
        <div className="flex flex-1 items-center gap-x-4 xl:gap-x-20">
          <Link href="/" className="josefin-bold text-3xl text-[#0D0E43]">
            Shopme
          </Link>
          <NavigationLinks />
        </div>

        <form className="mr-4 hidden md:block lg:mr-0">
          <label htmlFor="search-field" className="sr-only">
            Search...
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="search-field"
              className="border-[#E7E6EF h-10 w-[266px] border-2 border-r-0 outline-none"
            />
            <button type="submit" className="bg-pink-primary py-2 px-3">
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-x-5">
          <button
            className="md:hidden"
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-[#0D0E43]" />
          </button>
          <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-[#0D0E43]" />
          </button>
        </div>
      </Container>

      {/* mobile */}
      <div
        className={clsx(
          "fixed top-0 z-50 h-screen w-[280px] bg-[#F6F5FF] transition-all duration-300 ease-in-out lg:hidden",
          isMobileOpen ? "right-0" : "-right-full",
        )}
      >
        <button onClick={() => setMobileOpen(false)}>
          <XMarkIcon className="absolute top-5 right-5 h-6 w-6 text-[#0D0E43]" />
        </button>
        <NavigationLinks isMobileOpen={isMobileOpen} />
      </div>

      <form
        className={clsx(
          "fixed left-0 right-0 z-20 transition-all duration-200 ease-in-out md:hidden",
          isSearchOpen ? "top-0" : "-top-full",
        )}
      >
        <label htmlFor="search-field-mobile" className="sr-only">
          Search...
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="search-field-mobile"
            className="border-[#E7E6EF h-10 w-full border-2 border-r-0 outline-none"
          />
          <button type="submit" className="bg-pink-primary py-2 px-3">
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </form>
    </nav>
  );
}
