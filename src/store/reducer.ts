import { AppAction, AppState } from "./type";

// 定义 reducer 函数来处理状态变化
export function reducer(state: AppState, action: AppAction): AppState {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.paload };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
