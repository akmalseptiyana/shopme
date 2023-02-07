import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";

type InternalPageHeaderProps = {
  breadcrumb: BreadcrumbItem[];
};

export function InternalPageHeader({ breadcrumb }: InternalPageHeaderProps) {
  return (
    <header className="h-[286px] w-full bg-[#F6F5FF]">
      <Container>
        <Breadcrumb items={breadcrumb} />
      </Container>
    </header>
  );
}
