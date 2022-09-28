import { SkeletonListType } from "../../types/types";
import "./Regular.css";

export default function SkeletonList(props: SkeletonListType) {
  const { listSize, listItem: ListItem } = props;
  return (
    <ul className="flex">
      {Array(listSize)
        .fill(1)
        .map((_, idx) => (
          <ListItem key={idx}></ListItem>
        ))}
    </ul>
  );
}
