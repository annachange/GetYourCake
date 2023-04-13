import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BakerProfilePage from "./components/BakerProfilePage";
import ProductSelectionPage from "./components/ProductSelectionPage";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "bakerProfilePage",
//     element: <BakerProfilePage />,
//   },
//   {
//     path: "productSelectionPage",
//     element: <ProductSelectionPage />,
//   },
// ]);

//____Theme Provider
const theme = createTheme({
  palette: {
    primary: {
      main: "#cca2a2",
    },
    secondary: {
      main: "#cca2a2",
    },
    background: {
      default: "#86CFC7",
    },
  },
  typography: {
    h1: {
      fontSize: "5rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
  },

  paragraph: {
    margin: "0px",
    // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    //   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    // sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    fontSize: "36px",
    lineHeight: "1.5",
    backgroundColor: "#22ff00",
    color: "#22ff00",
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "my_button", // Set the default variant for all MuiButton components to the variant you just created
      },
      variants: [
        {
          props: { variant: "my_button" },
          style: {
            textTransform: "none",
            border: `1px solid #cca2a2`,
            fontSize: "1rem",
            transition: "font-size 0.2s ease-in-out",
            backgroundColor: "#EDD9DB", // Change the background color
            color: "#C27F85", // Change the text color
            "&:hover": {
              fontSize: "1rem",
              backgroundColor: "#C27F85",
              color: "#EDD9DB",
              boxShadow: "0px 1px 8px #FDE2E2",
            },
          },
        },
        // Other variants
      ],
    },


  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      {/*<RouterProvider router={router} />*/}
      <BrowserRouter >

        <App />

      </BrowserRouter>

    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
