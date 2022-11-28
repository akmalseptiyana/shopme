import { PrimaryButton } from "../ui/button/primary-button";
import { HomepageSection } from "./homepage-section";

export function HomePageNewslater() {
  return (
    <HomepageSection className="w-full h-[462px] flex items-center bg-newslater bg-cover bg-bottom text-center mt-32">
      <h2 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
        Get Leatest Update By Subscribe <br /> Our Newslater
      </h2>
      <PrimaryButton className="josefin-regular py-4 px-8 mt-11 self-center">
        Subscribe
      </PrimaryButton>
    </HomepageSection>
  );
}
