import { useState } from "react";

export const useArray = <T>(array: T[]) => {
  const [value, setValue] = useState(array);

  return {
    value,
    add: (item: T) => setValue([...value, item]),
    remove: (i: number) => {
      const copy = [...value];
      copy.splice(i, 1);
      setValue(copy);
    },
    clear: () => setValue([]),
  };
};
