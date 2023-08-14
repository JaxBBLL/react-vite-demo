import React, { createContext, useContext, useReducer, ReactNode } from "react";

// 创建初始状态
interface AppState {
  count: number;
}

// 定义操作类型
type AppAction = { type: "INCREMENT" } | { type: "DECREMENT" };

// 定义 reducer 函数来处理状态变化
function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// 创建 Context
interface StoreContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// 创建 Context Provider 组件
interface StoreProviderProps {
  children: ReactNode;
}

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
