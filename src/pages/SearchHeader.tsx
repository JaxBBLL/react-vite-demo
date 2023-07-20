import { useState } from "react";

export default () => {
  const [value, setValue] = useState("");

  const onSearch = () => {};

  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        value={value}
        onInput={(e) => setValue(e.currentTarget.value)}
      />
      <button className="btn btn-primary" type="button">
        Button
      </button>
    </div>
  );
};
