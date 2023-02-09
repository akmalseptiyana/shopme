import { HomepageSection } from "@/components/home/homepage-section";
import { PrimaryButton } from "@/components/ui/button/primary-button";

export function HomePageNewslater() {
  return (
    <HomepageSection className="mt-32 flex h-[462px] w-full items-center bg-newslater bg-cover bg-bottom text-center">
      <h2 className="josefin-bold text-3xl text-navy-blue md:text-4xl">
        Get Leatest Update By Subscribe <br /> Our Newslater
      </h2>
      <PrimaryButton
        type="button"
        className="josefin-regular mt-11 self-center py-4 px-8"
      >
        Subscribe
      </PrimaryButton>
    </HomepageSection>
  );
}
