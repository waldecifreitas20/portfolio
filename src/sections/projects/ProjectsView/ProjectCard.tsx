import type { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren) {

  return (
    <div
      className={`
        p-4 
        bg-[var(--bg-card)]

        border 
        rounded-xl
        border-[var(--primary)]/20
        hover:border-[var(--primary)]
        
        transition-all duration-100
        shadow-lg
        hover:shadow-purple-950/50
      `}

    >
      {props.children}
    </div >
  );
}