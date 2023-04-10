import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material/styles";

//____Theme Provider
const theme = createTheme({
  palette: {
    primary: {
      main: "#edd3d3",
    },
    secondary: {
      main: "#22ff00",
    },
    background: {
      default: "#86CFC7"
    }
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
            border: `1px solid #ffffff`,
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
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
