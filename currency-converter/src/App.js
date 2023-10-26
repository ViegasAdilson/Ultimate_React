// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";

export default function App() {
  const [valor, setValor] = useState("");
  const [moeda1, setMoeda1] = useState("EUR");
  const [moeda2, setMoeda2] = useState("USD");
  const [resul, setResul] = useState("");
  const [isloading, setIsLoading] = useState(false);

  // const host = "api.frankfurter.app";
  // fetch(`https://${host}/latest?amount=${valor}&from=${moeda1}&to=${moeda2}`)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     console.log(data.rates);
  //   });

  useEffect(
    function () {
      async function fecthMoeda() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${valor}&from=${moeda1}&to=${moeda2}`
        );
        const data = await res.json();
        setResul(data.rates[moeda2]);
        setIsLoading(false);
      }
      if (moeda1 === moeda2) return setResul(valor);
      fecthMoeda();
    },
    [valor, moeda1, moeda2]
  );

  return (
    <div>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
      />
      <select value={moeda1} onChange={(e) => setMoeda1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={moeda2} onChange={(e) => setMoeda2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {resul} <span>{moeda2}</span>
      </p>
    </div>
  );
}
