import { useState } from "react";
function App() {
  const [soma, setSoma] = useState("");
  const [valor, setValor] = useState(0);
  const [valor1, setValor1] = useState(0);
  const percent = (soma * (valor1 + valor)) / 2 / 100;

  const handleResert = () => {
    setSoma("");
    setValor(0);
    setValor1(0);
  };
  return (
    <div className="App">
      <Bill soma={soma} onSoma={setSoma} />
      <Service val={valor} onValor={setValor}>
        How did you like the service?
      </Service>
      <Service val={valor1} onValor={setValor1}>
        How did your friend likes the service?
      </Service>
      {soma && (
        <>
          <Display soma={soma} percent={percent} />
          <Button onResert={handleResert} />
        </>
      )}
    </div>
  );
}
function Bill({ soma, onSoma }) {
  return (
    <div>
      <label>How mush was the bill? </label>
      <input
        type="text"
        value={soma}
        onChange={(e) => onSoma(Number(e.target.value))}
      />
    </div>
  );
}

function Service({ val, onValor, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={val} onChange={(e) => onValor(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
function Display({ soma, percent }) {
  return (
    <div>
      <h3>
        You pay £{soma + percent} ({`£${soma} + £${percent}`})
      </h3>
    </div>
  );
}

function Button({ onResert }) {
  return (
    <div>
      <button onClick={onResert}>Resert</button>
    </div>
  );
}
export default App;
