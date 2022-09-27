//  actually useage of context in this small demo isn't necessary this is
// only for demenstration purposes
import { createContext, useContext, useState } from "react";
import { UserStatusContextType, UserStatusType } from "../types/types";

const UserStatusContext = createContext<UserStatusContextType>({
  status: UserStatusType.LOADING,
  setStatus: (status) => UserStatusType.SUCCESS,
});

type propsType = {
  children: JSX.Element | JSX.Element[];
};

export default function UserStatusProvider({ children }: propsType) {
  const [status, setStatus] = useState(UserStatusType.LOADING);

  return (
    <UserStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </UserStatusContext.Provider>
  );
}

export const useUserStatusContext = () => {
  const context = useContext(UserStatusContext);
  if (!context) {
    throw new Error(
      "useUserStausProvider must be used within the userStatusProvider"
    );
  }
  return context;
};
