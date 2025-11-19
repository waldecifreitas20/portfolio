import type { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function PrimaryButton(props: PrimaryButtonProps) {

  return (
    <button
      className="p-2 bg-(--primary) hover:bg-(--primary-hover) block w-full shadow-md rounded-md font-normal cursor-pointer"
      {...props}
    >{props.children}</button>
  );
}