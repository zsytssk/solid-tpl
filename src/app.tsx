import { createSignal } from "solid-js";

export const App = () => {
  let ref: HTMLDivElement;
  const [count, setCount] = createSignal(0);

  return (
    <div ref={ref!}>
      <div class="test1">{count()}</div>
      <div>this is a test</div>
      <button onClick={() => setCount((old) => old + 1)}>click</button>
    </div>
  );
};
