import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <div className="content">
          {/* Put your page content here */}
          <div className="content section">
            <img src="/gyk_logo.png" className="App-logo" alt="logo" />
            <p>Ordering a cake is a piece of cake</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
