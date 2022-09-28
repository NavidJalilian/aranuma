import { UserDataType, UsersListType } from "../../types/types";
import "./Regular.css";

export default function RegularList(props: UsersListType) {
  const { data, listItem: ListItem } = props;
  return (
    <ul className="flex">
      {data.map((user: UserDataType) => (
        <ListItem key={user.id} {...user}></ListItem>
      ))}
    </ul>
  );
}
