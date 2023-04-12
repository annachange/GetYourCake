import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BakerViewCards from "./BakerViewCards";

function BakerProfilePage() {
  return (
    <>
      <div className="BakerProfilePage">
        <header>
          <Navigation />
        </header>
        <div className="content">
          <div className="content section">
            {/* <img src="/gyk_logo.png" className="App-logo" alt="logo" /> */}
            <BakerViewCards />
          </div>
          {/* Put your page content here */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BakerProfilePage;
