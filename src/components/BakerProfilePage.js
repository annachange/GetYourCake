import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CakePriceUpdate from "./CakePriceUpdate";

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
            <p>Baker's profile page</p>


            <CakePriceUpdate />
          </div>
          {/* Put your page content here */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BakerProfilePage;
