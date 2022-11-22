import clsx from "clsx";

export function InternalPageContent({ children, className }) {
  return (
    <div className={clsx("flex flex-col flex-1", className)}>{children}</div>
  );
}
