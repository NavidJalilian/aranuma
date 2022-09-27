import { UserDataType, ListType } from "../../types/types";
import "./list.css";
export default function List(props: ListType) {
  let { data, listItem: ListItem, step, perPageCount = 12 } = props;
  return (
    <ul className="flex">
      {data.length > 0
        ? data.map((user: UserDataType) => {
            console.log(user);
            while (step > 0) {
              step--;
              return <ListItem key={user.id} {...user}></ListItem>;
            }
          })
        : Array(perPageCount)
            .fill(1)
            .map((_, idx: number) => {
              while (step > 0) {
                step--;
                return <ListItem key={idx}></ListItem>;
              }
              return;
            })}
    </ul>
  );
}
// changeThe name to control list
