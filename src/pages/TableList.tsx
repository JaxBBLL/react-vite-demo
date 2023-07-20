import { useState } from "react";

export default () => {
  const [value, setValue] = useState([
    {
      name: "Jack",
      id: 1,
      gender: 1,
    },
    {
      name: "Peter",
      id: 2,
      gender: 1,
    },
  ]);

  return (
    <table className="table table-striped table-bordered mt-2">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>gender</th>
        </tr>
      </thead>
      <tbody>
        {value.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
