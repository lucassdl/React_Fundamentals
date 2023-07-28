import {useState} from "react";

import MyComponent from './components/MyComponent';
import Title from "./components/Title";

import './App.css';

function App() {
  const n = 15;
  const [name] = useState("Lucas Lima");
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Lucas Lima" ? ({color: "green", backgroundColor: "black"}) : null }>Teste nome</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
