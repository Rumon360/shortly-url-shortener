import React, { useState } from "react";
import Nav from "./components/Nav";
// Components
import MainSection from "./components/MainSection";
import LinkShortener from "./components/LinkShortener";
import InfoSection from "./components/InfoSection";
import StyledBoost from "./components/Boost";
import Footer from "./components/Footer";
// Global Style
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  // Hamburger Toggle
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />

      <Nav hamburger={hamburger} setHamburger={setHamburger} />
      <MainSection hamburger={hamburger} />
      <LinkShortener />
      <InfoSection />
      <StyledBoost />
      <Footer />
    </div>
  );
}

export default App;
