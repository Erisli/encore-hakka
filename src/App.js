import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Menu from './components/Menu/Menu';
import Lunch from './components/Lunch/Lunch';
import Coupons from './components/Coupons/Coupons';
import Combo from './components/Combo/Combo';
import Trays from './components/Trays/Trays';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Gallery from './components/Gallery/Gallery';
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {

  return (
    <div  >

      <BrowserRouter basename='/encore-hakka'>
        <Header />

        <Routes>
          
            <Route path="/" element={<Slider />} />
            <Route path="/home" element={<Slider />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<Menu />}/>
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/trays" element={<Trays />} />
            <Route path="/combos" element={<Combo />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<NotFound />} />
          
        </Routes>

      </BrowserRouter>

      <Footer />
    </div>


  );
}

export default App;
