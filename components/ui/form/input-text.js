import clsx from "clsx";

export function InputText({ type, className, placeholder }) {
  return (
    <input type={type} className={clsx(className)} placeholder={placeholder} />
  );
}
