import { SocialIcons } from "@/components/ui/social-icons";

export function FooterCopy() {
  return (
    <div className="mt-28 bg-[#E7E4F8] py-4">
      <div className="container flex max-w-[960px] flex-wrap items-center justify-between">
        <p className="lato-regular text-base text-[#9DA0AE]">
          ©Shopme - All Rights Reserved
        </p>
        <SocialIcons className="bg-navy-blue" />
      </div>
    </div>
  );
}
