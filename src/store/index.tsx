import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { StoreContextType, StoreProviderProps } from "./type";

// 创建 Context
const StoreContext = createContext<StoreContextType | undefined>(undefined);

// 创建 Context Provider 组件
export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

// 自定义 Hook 来获取 Context
export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
