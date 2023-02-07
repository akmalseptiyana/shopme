import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

type InputSelectProps = {
  className?: string;
  children: ReactNode;
} & InputHTMLAttributes<HTMLSelectElement>;

export function InputSelect({
  className,
  children,
  ...rest
}: InputSelectProps) {
  return (
    <select
      className={clsx(
        "w-full border border-[#E7E6EF] text-sub-text",
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
}
