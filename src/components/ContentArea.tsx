import type { PropsWithChildren } from "react";

export function ContentArea(props: PropsWithChildren) {
  return (
    <section>
      {props.children}
    </section>
  );
}