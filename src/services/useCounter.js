import React, { useState } from "react";
function useCounter( start, step ) {
  const [result, setResult] = useState(start);

  function increment() {
    setResult(result + step);
  }

  function decrement() {
    setResult(result - step);
  }

  return { result, increment, decrement };
}

export default useCounter;
