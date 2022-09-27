import { SelectChangeEvent } from "@mui/material";
export type UserDataType = {
  avatar?: string;
  email?: string;
  first_name?: string;
  id?: number;
  last_name?: string;
};

export enum UserStatusType {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
export type UserListType = {
  data: UserDataType[];
  listItem: React.FunctionComponent<UserDataType>;
  step: number;
  perPageCount: number;
};

export enum PerferedLayoutType {
  VERRTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

export type UserStatusContextType = {
  status: UserStatusType;
  setStatus: React.Dispatch<React.SetStateAction<UserStatusType>>;
};
