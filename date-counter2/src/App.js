import { useState } from "react";

export default function App() {
  const date = new Date("june 21 2027");
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <div>
        <p>
          <span>
            {count === 0
              ? "today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Resert</button>
        ) : null}
      </div>
    </div>
  );
}
