import { createSignal } from "solid-js";

export const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      {count()}
      <button onClick={() => setCount((old) => old + 1)}>click</button>
    </div>
  );
};
