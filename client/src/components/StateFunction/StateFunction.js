import React, { useState } from "react";

function StateFunction() {
  // var counter = 0;
  const [counter, setCounter] = useState(0);

  const increase = () => {
    console.log("Initial Value", counter);
    setCounter((prev) => prev + 1);
    console.log("Final Value", counter);
  };

  const decrease = () => {
    console.log("Initial Value", counter);
    setCounter(counter - 1);
    console.log("Final Value", counter);
  };

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
      {counter}
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default StateFunction;
