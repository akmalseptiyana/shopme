import clsx from "clsx";

export function InputTextarea({ className, rows = 4, placeholder, ...rest }) {
  return (
    <textarea
      className={clsx(
        "text-base lato-regular border border-[#A4B6C8]/70 rounded-[3px] outline-none w-full",
        className
      )}
      rows={rows}
      placeholder={placeholder}
      {...rest}
    />
  );
}
