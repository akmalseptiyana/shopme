import clsx from "clsx";

export function PrimaryButton({
  className,
  type,
  icon,
  iconPosition = "left",
  children,
}) {
  return (
    <button
      className={clsx(
        "leading-none bg-pink-primary text-base text-white rounded-sm",
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
}
