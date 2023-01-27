import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputTextProps = {
  className?: string;
  type: "text" | "email" | "password";
  name?: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputText({
  type,
  className,
  name,
  placeholder,
  ...rest
}: InputTextProps) {
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
