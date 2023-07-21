import React, { useState } from "react";
interface User {
  name: string;
}

const state = {
  user: {
    name: "JaxBBLL",
  },
  setUser: () => {},
};

const ProviderContext = React.createContext<{
  user: User;
  setUser: (user: User) => void;
}>(state);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(state.user);

  return (
    <ProviderContext.Provider value={{ user, setUser }}>
      {children}
    </ProviderContext.Provider>
  );
}

export const useProvider = () => {
  const context = React.useContext(ProviderContext);

  return context;
};
