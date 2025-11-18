import type { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren) {

  return (
    <div
      className={`
        p-4 
        bg-(--bg-card)

        border 
        rounded-xl
        border-(--primary)/20
        hover:border-(--primary)
        
        transition-all duration-100
        shadow-lg
        hover:shadow-purple-950/50
      `}

    >
      {props.children}
    </div >
  );
}