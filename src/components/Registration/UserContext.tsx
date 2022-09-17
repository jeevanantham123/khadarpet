import React, { useState } from "react";

interface IContextProps {
  userDetails: any;
  fetchUserDetails: () => void;
  onInputChange: (key: string, value: any) => void;
}
export const UserPageContext = React.createContext({} as IContextProps);

function useUserPagesInfo() {
  const [userDetails, setUserDetails] = useState<any>({
    data: {},
    status: "",
  });

  function fetchUserDetails() {}

  function onInputChange(key: string, value: string) {
    const tempUserDetails = { ...userDetails?.data };
    tempUserDetails[key] = value;
    setUserDetails({
      ...userDetails,
      data: tempUserDetails,
    });
  }

  return {
    userDetails,
    fetchUserDetails,
    onInputChange,
  };
}

function UserPageProvider(props: any) {
  const userData = useUserPagesInfo();
  return (
    <UserPageContext.Provider value={userData}>
      {props.children}
    </UserPageContext.Provider>
  );
}
UserPageProvider.context = UserPageContext;
export default UserPageProvider;
