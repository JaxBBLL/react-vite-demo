import { useState } from "react";
import { useProvider } from "../context";
import { useMount } from "@/hooks";
import { getRandomColor } from "@/utils";

export default () => {
  const { user } = useProvider();
  const [color, setColor] = useState("");

  useMount(() => {
    setColor(getRandomColor());
  });

  return (
    <>
      <p className="text-16">
        用户：<span style={{ color }}>{user.name}</span>
      </p>
      <main className="flex items-center">
        <p className="text-26 font-bold color-red-500">UnoCSS</p>
        <p className="ml-30 text-14 text-green">Hello</p>
      </main>
    </>
  );
};
