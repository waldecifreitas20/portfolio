import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  accent?: boolean;
  onClick?: () => void;
  style?: string;
}

export function Button(props: ButtonProps) {
  const buttonColors = props.accent ?
    ("bg-(--accent) hover:bg-(--accent-hover)") :
    ("bg-(--primary) hover:bg-(--primary-hover)");


  function handleClick(evt: any) {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <button
      className={`
      p-2 
      ${buttonColors}
      block w-full 
      shadow-md rounded-md 
      cursor-pointer  

      ${props.style ?? ''}
      `}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}