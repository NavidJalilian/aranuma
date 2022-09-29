import { SelectChangeEvent } from "@mui/material";

export type UserDataType = {
  avatar?: string;
  email?: string;
  first_name?: string;
  id?: number;
  last_name?: string;
};
export type FetchedUsersDataType = {
  data: UserDataType[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};
export enum UserStatusType {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
export type UserStatusContextType = {
  status: UserStatusType;
  setStatus: React.Dispatch<React.SetStateAction<UserStatusType>>;
};

export type UsersListType = {
  data: UserDataType[];
  listItem: React.FunctionComponent<UserDataType>;
};
export type SkeletonListType = {
  listItem: React.FunctionComponent;
  listSize: number;
};

export enum PerferedLayoutType {
  VERRTICAL = "vertical",
  HORIZONTAL = "horizontal",
}
export type MuiRadioGroupType = {
  label: string;
  value: PerferedLayoutType;
  changeHandler: (e: SelectChangeEvent) => void;
  children: React.ReactNode;
};
