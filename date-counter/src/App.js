import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, SetCount] = useState(0);
  const [step, setSTep] = useState(0);
  const today = new Date("june 21 2027");
  today.setDate(today.getDate() + count); // Add 30 days
  // console.log(today);

  function handleStepsPlus() {
    setSTep((s) => s + 1);
  }

  function handleStepsLess() {
    setSTep((s) => s - 1);
  }

  function handleCountPlus() {
    SetCount((c) => c + step);
  }

  function handleCountLess() {
    SetCount((c) => c - step);
  }
  return (
    <div>
      <div>
        <button onClick={handleStepsLess}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepsPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountLess}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountPlus}>+</button>
        <div>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}{" "}
            {today.toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
