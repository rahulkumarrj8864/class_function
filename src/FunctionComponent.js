import { useEffect, useState } from "react";

export default function FunctionComponent() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
    <h1>Function Component</h1>
      <button onClick={increment}>+</button>
      <h2>{counter}</h2>
      <button onClick={decrement}>-</button>
    </>
  );
}
