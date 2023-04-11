import React from "react";
// import BakerProfile from "./components/bakerProfileComponent/BakerProfile";
import Button from "@mui/material/Button";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav class="navbar navbar-custom navbar-expand-lg sticky-top">
      <div class="container-fluid justify-content-between">
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link class="navbar-brand" to="/">
            <img
              src="/gyk_logo.png"
              alt=""
              width="13%"
              class="d-inline-block align-text-center"
            />
            GetYourCake.
          </Link>
        </div>
        <div className="navbar-buttons">
          <Button>
            {" "}
            <Link to="/bakerProfilePage"> Discover a baker</Link>
          </Button>
          <Button>
            {" "}
            <Link to="/ProductSelectionPage">Select a product</Link>
          </Button>
          <Button sx={{ marginLeft: 1 }}>LOG IN</Button>
          <Button sx={{ marginLeft: 1, height: "42px" }}>
            <ShoppingCartRoundedIcon />{" "}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
