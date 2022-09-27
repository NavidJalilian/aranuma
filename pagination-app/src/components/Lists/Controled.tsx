import { UserDataType, UsersListType } from "../../types/types";
import "./list.css";

export default function List(props: UsersListType) {
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
        : Array(perPageCount) //for loading state
            .fill(1)
            .map((_, idx: number) => {
              while (step > 0) {
                step--;
                return <ListItem key={idx}></ListItem>;
              }
            })}
    </ul>
  );
}
// changeThe name to control list
