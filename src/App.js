import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Bestmenu from "./component/Bestmenu";
import AboutusLandingpage from "./component/AboutusLandingpage";
import ContactinfoLandingpage from "./component/ContactinfoLandingpage";

function App() {
  return (
            <>
              <Navbar></Navbar>
              <Hero></Hero>
              <Bestmenu></Bestmenu>
              <AboutusLandingpage></AboutusLandingpage>
              <ContactinfoLandingpage></ContactinfoLandingpage>
            </>
         );
}

export default App;
