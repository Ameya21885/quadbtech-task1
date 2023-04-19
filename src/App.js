import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import SingleProduct from "./components/product/SingleProduct";


const App = () => {


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="singleProduct/:id" element={<SingleProduct/>}/>
        </Routes>
      </Router>

     
    </div>
  );
};

export default App;
