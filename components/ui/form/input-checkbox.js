import clsx from "clsx";

export function InputCheckbox({ className, ...rest }) {
  return <input type="checkbox" className={clsx(className)} {...rest} />;
}
