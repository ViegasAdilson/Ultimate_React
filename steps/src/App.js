import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps/> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOppen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOppen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">
            <h3>Step {step}</h3>: {messages[step - 1]}
          </p> */}
          <StepMessege step={step}>{messages[step - 1]}</StepMessege>

          <div className="buttons">
            <Buttoon
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePrevious}
              text="Previous"
            >
              <span>👈</span> Prevous
            </Buttoon>
            <Buttoon
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleNext}
              text="Next"
            >
              Next <span>👉</span>
            </Buttoon>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessege({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Buttoon({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
