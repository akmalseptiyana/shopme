import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputCheckboxProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputCheckbox({ className, ...rest }: InputCheckboxProps) {
  return <input type="checkbox" className={clsx(className)} {...rest} />;
}
