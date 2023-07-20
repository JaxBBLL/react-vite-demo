import React from "react";

import SearchHeader from "./SearchHeader";
import TableList from "./TableList";
import { useProvider } from "../context";

function App() {
  const { user } = useProvider();
  return (
    <>
      <p>用户：{user.name}</p>
      <div className="container pt-2">
        <SearchHeader />
        <TableList />
      </div>
    </>
  );
}

export default App;
