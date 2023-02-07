import clsx from "clsx";
import { InputHTMLAttributes } from "react";

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
        "lato-regular w-full rounded-[3px] border border-[#A4B6C8]/70 text-base outline-none",
        className,
      )}
      rows={rows}
      placeholder={placeholder}
      {...rest}
    />
  );
}
