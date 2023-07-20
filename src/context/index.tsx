import React, { useState } from "react";

export const ProviderContext = React.createContext({
  user: {
    name: "",
  },
});

export function ProviderApp({ children }: { children: React.ReactNode }) {
  const [user] = useState({
    name: "Jack",
  });

  return (
    <ProviderContext.Provider value={{ user }}>
      {children}
    </ProviderContext.Provider>
  );
}

export const useProvider = () => {
  const context = React.useContext(ProviderContext);

  return context;
};
