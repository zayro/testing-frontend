import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("Nada");

  const updateQuery = (value) => (e) => {
    console.log(value);
    setQuery(value);
  };

  const updateQueryv2 = (value) => {
    console.log(value);
    setQuery(value);
  };

  const handleClick = () => {
    console.log("ingreso");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p id="infoQuery">You clicked {query} times</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <label htmlFor="cajaTexto">cajaTexto:</label>
        <input type="text" id="cajaTexto" />
        <hr></hr>

        <label htmlFor="cajaSelect">Seleecionar:</label>
        <select
          data-testid="custom-element"
          name="itemSelect"
          onChange={handleChange}
        >
          <option value="">State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
        </select>

        <button type="button" id="enviar_form" onClick={handleClick}>
          enviar
        </button>
      </section>

      <section>
        <button
          type="button"
          id="modificar_query"
          onClick={updateQuery("hola mundo")}
        >
          modificar_query
        </button>
        <hr></hr>
        <button
          type="button"
          id="modificar_query_v2"
          onClick={() => updateQueryv2("pratech")}
        >
          modificar_query_v2
        </button>
      </section>
    </div>
  );
};

export default App;
