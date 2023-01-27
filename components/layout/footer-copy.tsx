import { SocialIcons } from "@/components/ui/social-icons";

export function FooterCopy() {
  return (
    <div className="bg-[#E7E4F8] py-4 mt-28">
      <div className="container flex flex-wrap items-center justify-between max-w-[960px]">
        <p className="text-base text-[#9DA0AE] lato-regular">
          ©Shopme - All Rights Reserved
        </p>
        <SocialIcons className="bg-navy-blue" />
      </div>
    </div>
  );
}
