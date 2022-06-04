// import logo from './logo.svg';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Menu from './components/Menu/Menu';
import Lunch from './components/Lunch/Lunch';
import Coupons from './components/Coupons/Coupons';
import Combo from './components/Combo/Combo';
import Trays from './components/Trays/Trays';
import Footer from './components/Footer/Footer';
import React from "react";
import { render } from "react-dom";
import { useWindowSize } from "./Hooks/useWindowSize";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div  >
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slider />}/>
          <Route path="/home" element={<Slider />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="lunch" element={<Lunch />}/>
          <Route path="coupons" element={<Coupons />}/>
          <Route path="trays" element={<Trays />}/>
          <Route path="combos" element={<Combo />}/>

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>


  );
}

export default App;
