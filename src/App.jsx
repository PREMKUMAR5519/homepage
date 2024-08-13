import React from 'react'
import Lander from './components/Lander'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import { UserProvider } from './components/UserContext';
import Register from './components/Register';
import Slide from './components/Slide';
import ProductDetails from './components/ProductDetails';
import SpainSaffron from './components/SpainSaffron';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import KashmiriSaffron from './components/KashmiriSaffron';
import MainPageTrial from './components/MainPageTrial';
import ProductListing from './components/ProductListing';
import About from './components/About';
import Purchase from './components/Purchase';
import Test from './components/Test';
import ChooseUs from './components/ChooseUs';
import Insight from './components/Insight';
import KashmirSaffron from './components/KashmirSaffron';
import { ParallaxProvider } from 'react-scroll-parallax';
import CulinaryUse from './components/CulinaryUse';
import MedicineUse from './components/MedicineUse';
import Pregnancy from './components/Pregnancy';
import Beauty from './components/Beauty';

function App() {
  return (
    <>

    <ParallaxProvider>
    <UserProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainPage />}/> */}
        <Route path="/" element={<MainPageTrial />}/>
        <Route path="/product-list" element={<ProductListing />}/>
        <Route path="/aboutus" element={<About />}/>
        <Route path="/purchase" element={<Purchase />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/choose-us" element={<ChooseUs />}/>
        <Route path="/insight" element={<Insight />}/>
        <Route path="/culinary-use" element={<CulinaryUse />}/>
        <Route path="/medicine-use" element={<MedicineUse />}/>
        <Route path="/beauty-use" element={<Beauty />}/>
        <Route path="/pregnancy-use" element={<Pregnancy />}/>












        <Route path="/login" element={<Login />}/>
        <Route path="/spain-saffron" element={<SpainSaffron />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/user-register" element={<Slide />}/>
        <Route path="/productdeatils" element={<ProductDetails />}/>
        <Route path="/productdeatil" element={<ProductDetail />}/>
        <Route path="/kashmiri-saffron" element={<KashmiriSaffron />}/>
        <Route path="/kashmir-saffron" element={<KashmirSaffron />}/>




        

      </Routes>
    </BrowserRouter>
    </UserProvider>
    </ParallaxProvider>
    </>
  )
}

export default App