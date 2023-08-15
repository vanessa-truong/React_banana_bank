import { useState } from "react";
import "./App.css";

function formatCurrency(amount) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function parseCurrencyValue(value) {
  const cleanedValue = value.toString().replace(/[^\d.,]/g, ""); // Remove all non-numeric characters except dot and comma
  const parsedValue = cleanedValue.replace(",", "."); // Replace comma with dot for parsing
  return parseFloat(parsedValue);
}

function App() {
  const [count, setCount] = useState(0);
  const [cash, setCash] = useState("");

  const cashChange = (event) => {
    setCash(Number(event.target.value));
  };

  const handleEinzahlen = () => {
    if (cash !== "") {
      setCount(count + parseCurrencyValue(cash));
      setCash("");
    }
  };

  const handleAuszahlen = () => {
    if (cash !== "") {
      setCount(count - parseCurrencyValue(cash));
      setCash("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEinzahlen(); // You can customize this based on your needs
    }
  };

  return (
    <div className="App">
      <header className="header">
        <img
          src="https://images.unsplash.com/photo-1604148482093-d55d6fc62400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="banana"
          id="logoImg"
        />
        <h1 id="title">Banana Bank</h1>
        <p className="saldo">Dein Girokonto: {formatCurrency(count)} EUR</p>
        <input
          type="text"
          name=""
          className="geldbetrag"
          onChange={cashChange}
          onKeyDown={handleKeyDown}
          placeholder="Gib einen Geldbetrag ein"
          value={cash}
        />
        <button className="einzahlen" onClick={handleEinzahlen}>
          Einzahlen
        </button>
        <button className="auszahlen" onClick={handleAuszahlen}>
          Auszahlen
        </button>
      </header>
    </div>
  );
}

export default App;
