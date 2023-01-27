import { ReactNode, InputHTMLAttributes } from "react";
import clsx from "clsx";

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
        "w-full text-sub-text border border-[#E7E6EF]",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  );
}
