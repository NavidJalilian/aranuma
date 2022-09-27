export type UserDataType = {
  avatar?: string;
  email?: string;
  first_name?: string;
  id?: number;
  last_name?: string;
};


export type ListType = {
  data: UserDataType[];
  listItem: React.FunctionComponent<UserDataType>;
  step: number;
  perPageCount: number;
};
