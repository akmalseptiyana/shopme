import clsx from "clsx";
import { InputHTMLAttributes } from "react";

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
        "lato-regular w-full rounded-[3px] border border-[#A4B6C8]/70 text-base outline-none",
        className,
      )}
      placeholder={placeholder}
      {...rest}
    />
  );
}
