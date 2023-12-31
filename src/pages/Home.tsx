import { useStore } from "@/store";
import { Button, Space } from "@arco-design/web-react";
import { IconPlus, IconMinus } from "@arco-design/web-react/icon";

export default () => {
  const { state, dispatch } = useStore();

  const increment = () => {
    setTimeout(() => {
      dispatch({ type: "INCREMENT", paload: ~~(Math.random() * 5) });
    }, 300);
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div className="mb-10">Count: {state.count}</div>
      <Space>
        <Button type="primary" icon={<IconPlus />} onClick={increment} />
        <Button
          type="primary"
          icon={<IconMinus />}
          onClick={decrement}
        ></Button>
      </Space>
    </>
  );
};
