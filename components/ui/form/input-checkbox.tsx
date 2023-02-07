import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type InputCheckboxProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputCheckbox({ className, ...rest }: InputCheckboxProps) {
  return <input type="checkbox" className={clsx(className)} {...rest} />;
}
