import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function ProductSelectionPage() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="content">
        <div className="content section">
          {/* <img src="/gyk_logo.png" className="App-logo" alt="logo" /> */}
          <p>Select your cake specifications here</p>
        </div>
        {/* Put your page content here */}
      </div>
      <Footer />
    </div>
  );
}

export default ProductSelectionPage;
