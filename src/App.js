import { useState } from "react";
import "./App.css";

// Hilfsfunktionen
function formatCurrency(amount) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function parseCurrencyValue(value) {
  const cleanedValue = value.toString().replace(/[^\d.,]/g, "");
  const parsedValue = cleanedValue.replace(",", ".");
  return parseFloat(parsedValue);
}

function App() {
  const [accountBalance, setAccountBalance] = useState(0);
  const [cashInput, setCashInput] = useState("");

  // Handler für Geldbetrag-Änderung
  const handleCashChange = (event) => {
    setCashInput(event.target.value);
  };

  // Handler für Einzahlen und Auszahlen
  const handleTransaction = (transactionType) => {
    if (cashInput !== "") {
      const amount = parseCurrencyValue(cashInput);
      if (transactionType === "Einzahlen") {
        setAccountBalance(accountBalance + amount);
      } else if (transactionType === "Auszahlen") {
        setAccountBalance(accountBalance - amount);
      }
      setCashInput("");
    }
  };

  // Handler für Enter-Taste
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleTransaction("Einzahlen"); // Du kannst dies entsprechend anpassen
    }
  };

  return (
    <div className="App">
      <header className="header">
        <img
          src="https://images.unsplash.com/photo-1604148482093-d55d6fc62400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="Banane"
          id="logoImg"
        />
        <h1 id="title">Banana Bank</h1>
        <p className="saldo">
          Dein Girokonto: {formatCurrency(accountBalance)} EUR
        </p>
        <input
          type="text"
          name=""
          className="geldbetrag"
          onChange={handleCashChange}
          onKeyDown={handleKeyDown}
          placeholder="Gib einen Geldbetrag ein"
          value={cashInput}
        />
        <button
          className="einzahlen"
          onClick={() => handleTransaction("Einzahlen")}
        >
          Einzahlen
        </button>
        <button
          className="auszahlen"
          onClick={() => handleTransaction("Auszahlen")}
        >
          Auszahlen
        </button>
      </header>
    </div>
  );
}

export default App;
