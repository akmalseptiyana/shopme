import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";

type InternalPageHeaderProps = {
  breadcrumb: BreadcrumbItem[];
};

export function InternalPageHeader({ breadcrumb }: InternalPageHeaderProps) {
  return (
    <header className="w-full h-[286px] bg-[#F6F5FF]">
      <Container>
        <Breadcrumb items={breadcrumb} />
      </Container>
    </header>
  );
}
