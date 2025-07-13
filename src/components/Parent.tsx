import { useState } from "react";
import Child from "./Child";
import "../App.css";

const Parent = () => {
  const [number, setNumber] = useState(5); // Shared state

  const incrementHandler = () => {
    setNumber((prev) => prev + 1); // Increment number
  };
  const decrementHandler = () => {
    setNumber((prev) => {
      if (prev == 0) {
        alert("cant be less than 0");

        return 0;
      }
      return prev - 1;
    });
  };

  return (
    <div className="parent">
      <div style={{ display: "flex", gap: "1em", marginTop: "1px" }}>
        <button className="btn" onClick={incrementHandler}>
          Increment
        </button>
        <button className="btn" onClick={decrementHandler}>
          Decrement
        </button>{" "}
      </div>

      <span className="showVal">Value: {number}</span>
      <Child number={number} />
    </div>
  );
};

export default Parent;
