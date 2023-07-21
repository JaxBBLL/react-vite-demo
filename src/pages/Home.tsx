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
      <p>用户：{user.name}</p>
    </>
  );
}

export default App;
