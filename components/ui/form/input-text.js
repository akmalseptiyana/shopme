import clsx from "clsx";

export function InputText({ type, className, name, placeholder, ...rest }) {
  return (
    <input
      type={type}
      name={name}
      className={clsx(
        "text-base lato-regular border border-[#A4B6C8]/70 rounded-[3px] outline-none w-full",
        className
      )}
      placeholder={placeholder}
      {...rest}
    />
  );
}
