import React, { ReactNode } from "react";

export type AppAction =
  | { type: "INCREMENT"; paload: number }
  | { type: "DECREMENT" };

export interface AppState {
  count: number;
}

export interface StoreContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export interface StoreProviderProps {
  children: ReactNode;
}
