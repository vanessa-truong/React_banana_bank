import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [cash, setCash] = useState(0);

  const cashChange = (event) => {
    setCash(Number(event.target.value));
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
        <p className="saldo">Dein Girokonto:{count} EUR</p>
        <input
          type="number"
          name=""
          className="geldbetrag"
          onChange={cashChange}
          placeholder="Gib einen Geldbetrag ein"
        />
        <button className="einzahlen" onClick={() => setCount(count + cash)}>
          Einzahlen
        </button>
        <button className="auszahlen" onClick={() => setCount(count - cash)}>
          Auszahlen
        </button>
      </header>
    </div>
  );
}

export default App;
