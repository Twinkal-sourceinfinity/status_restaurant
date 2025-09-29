import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/landingpage/Navbar";
import Hero from "./component/landingpage/Hero";
import Bestmenu from "./component/landingpage/Bestmenu";
import AboutusLandingpage from "./component/landingpage/AboutusLandingpage";
import ContactinfoLandingpage from "./component/landingpage/ContactinfoLandingpage";

import Aboutuspagehero from "./component/aboutus/Aboutuspagehero";

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
        <Route path="/franchise" element={<h1>Franchise Page Coming Soon...</h1>} />
        <Route path="/contact" element={<ContactinfoLandingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
