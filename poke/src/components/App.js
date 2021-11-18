import React from "react"
import './App.scss'
import Header from "./header";
import Footer from './footer'
import GlobalContext from "./GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import HomeDetails from "./Details/HomeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContext >

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<HomeDetails />} />
          </Routes>
          <Footer />

        </GlobalContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
