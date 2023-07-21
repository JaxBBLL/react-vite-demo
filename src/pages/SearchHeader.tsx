import { useState } from "react";
import { Input } from "@arco-design/web-react";

export default () => {
  const [value, setValue] = useState("");

  return (
    <Input.Search
      value={value}
      onChange={(value) => setValue(value)}
      style={{ width: 350, marginBottom: 10 }}
      searchButton={true}
    />
  );
};
