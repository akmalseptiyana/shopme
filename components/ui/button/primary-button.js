import clsx from "clsx";

export function PrimaryButton({
  className,
  color = "bg-pink-primary",
  type,
  icon,
  iconPosition = "left",
  children,
  ...rest
}) {
  return (
    <button
      className={clsx(
        "leading-none text-base text-white rounded-sm",
        color,
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
