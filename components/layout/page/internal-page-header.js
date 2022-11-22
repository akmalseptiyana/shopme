import { Breadcrumb } from "../../ui/breadcrumb";
import { Container } from "../../ui/container";

export function InternalPageHeader({ breadcrumb }) {
  return (
    <header className="w-full h-[286px] bg-[#F6F5FF]">
      <Container>
        <Breadcrumb items={breadcrumb} />
      </Container>
    </header>
  );
}
