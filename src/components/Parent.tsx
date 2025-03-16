import { useState } from "react";
import Child from "./Child";
import "../App.css";
const Parent = () => {
  const [number, setNumber] = useState(5); // Shared state

  const incrementHandler = () => {
    setNumber((prev) => prev + 1); // Increment number
  };
  const decrementHandler = () => {
    setNumber((prev) => prev + 1); // Increment number
  };

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <span className="showVal">Value: {number}</span>
      <button onClick={decrementHandler}>Decrement</button>
      <Child number={number} />
    </div>
  );
};

export default Parent;
