import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputTextareaProps = {
  className?: string;
  rows: number;
  placeholder: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export function InputTextarea({
  className,
  rows = 4,
  placeholder,
  ...rest
}: InputTextareaProps) {
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
