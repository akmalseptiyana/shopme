import clsx from "clsx";

export function PrimaryButton({
  className,
  type,
  icon,
  iconPosition = "left",
  children,
}) {
  return (
    <button className={clsx("leading-none", className)} type={type}>
      {children}
    </button>
  );
}
