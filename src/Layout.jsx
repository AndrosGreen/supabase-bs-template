import { createContext, useState } from "react";
import { useSession } from "./use-session";

export const UserContext = createContext({
  session: null,
  profile: null,
});

const Layout = ({ children }) => {
  const supashipUserInfo = useSession();
  return (
    <UserContext.Provider value={supashipUserInfo}>
      {children}
    </UserContext.Provider>
  );
};

export default Layout;
