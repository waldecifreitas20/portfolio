import { useRef, type ReactElement } from "react";
interface ListProps {
  items: Array<any>,
  icon?: ReactElement
}

export function List(props: ListProps) {
  const listId = useRef(Math.random());
  return (
    <ul className="text-sm mt-2">
      {props.items.map((item, i) => {
        return <li key={`list$${listId.current}-item$${i}`}>
          {props.icon}
          {item.name}
        </li>
      })}
    </ul>
  );
}