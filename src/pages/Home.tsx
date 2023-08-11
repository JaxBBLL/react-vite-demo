import { useProvider } from "../context";
import { useMount } from "@/hooks";

function App() {
  const { user, setUser } = useProvider();

  useMount(() => {
    setTimeout(() => {
      setUser({
        name: "liusc",
      });
    }, 2000);
  });

  return (
    <>
      <p className="text-18">用户：{user.name}</p>
      <main className="flex items-center">
        <p className="text-26 font-bold color-red-500">UnoCSS</p>
        <p className="ml-30 text-14 text-green">Hello</p>
      </main>
    </>
  );
}

export default App;
