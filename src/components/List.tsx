import { useRef, type ReactElement } from "react";
interface ListProps {
  items: Array<any>,
  icon?: ReactElement,
}

export function List(props: ListProps) {
  const listId = useRef(Math.random());
  return (
    <ul className="text-sm mt-2">
      {props.items.map((item, i) => {
        const classes = "flex items-center gap-1";
        const itemKey = `list$${listId.current}-item$${i}`;

        return (
          <li className={classes} key={itemKey}>
            {props.icon}
            {item}
          </li>
        );
      })}
    </ul >
  );
}