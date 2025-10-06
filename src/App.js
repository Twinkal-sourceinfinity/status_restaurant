import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/landingpage/Navbar";
import Hero from "./component/landingpage/Hero";
import Bestmenu from "./component/landingpage/Bestmenu";
import AboutusLandingpage from "./component/landingpage/AboutusLandingpage";
import ContactinfoLandingpage from "./component/landingpage/ContactinfoLandingpage";

import Aboutuspagehero from "./component/aboutus/Aboutuspagehero";
import Aboutuspagedetail from "./component/aboutus/Aboutuspagedetail";
import Chefdetail from "./component/aboutus/Chefdetail";

import Franchisepagehero from "./component/franchise/Franchisepagehero";

import Contactuspagehero from "./component/contactus/Contactuspagehero";

function HomePage() {
  return (
    <>
      <Hero />
      <Bestmenu />
      <AboutusLandingpage />
      <ContactinfoLandingpage />
    </>
  );
}

function Aboutuspage() {
  return (
    <>
      <Aboutuspagehero />
      <Aboutuspagedetail />
      <Chefdetail />
    </>
  )
}

function Franchisepage(){
  return (
    <>
      <Franchisepagehero />
    </>
  )
}

function Contactuspage() {
  return (
    <>
      <Contactuspagehero />
    </>
  )
}


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutuspage />} />
        <Route path="/food" element={<Bestmenu />} />
        <Route path="/franchise" element={<Franchisepage />} />
        <Route path="/contact" element={<Contactuspage />} />
      </Routes>
    </Router>
  );
}

export default App;
