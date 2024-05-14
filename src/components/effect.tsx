import { useState, useEffect } from "react";

const Exam = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // the code that what we want to run
    console.log("the count is :", count);
    // optional return function
  }, [count]);
  //   the dependency array
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default Exam;
