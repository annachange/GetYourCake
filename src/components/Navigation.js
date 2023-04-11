import React from "react";
// import BakerProfile from "./components/bakerProfileComponent/BakerProfile";
import Button from "@mui/material/Button";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link , useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";

import {useAuthValue} from '../AuthContext'

function Navigation(props) {

  const {currentUser} = useAuthValue()
  const navigate = useNavigate()

  console.log(currentUser)

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
            GetYourCake
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
          {currentUser === null &&
            <Button sx={{ marginLeft: 1 }} onClick={() => navigate("login")}>LOG IN</Button>
          }
          {currentUser !== null &&
            <Button onClick={() => signOut(auth)}>Sign Out</Button>
          }

          {currentUser !== null &&
              <Button onClick={() => navigate("profile")}>Profile</Button>
          }
          <Button sx={{ marginLeft: 1, height: "42px" }}>
            <ShoppingCartRoundedIcon />{" "}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
