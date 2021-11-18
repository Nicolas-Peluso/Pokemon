import React from "react"
import './App.scss'
import Header from "./header";
import Footer from './footer'

function App() {
  const b = 1
  return (
    <div className="App">
      <Header b={b} />
      <h1>meu projeto</h1>
      <Footer />
    </div>
  );
}

export default App;
