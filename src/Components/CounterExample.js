import React, { useState } from "react";

export default function CounterExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
