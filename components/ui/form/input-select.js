import clsx from "clsx";

export function InputSelect({ className, children, ...rest }) {
  return (
    <select
      className={clsx(
        "w-full text-sub-text border border-[#E7E6EF]",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  );
}
