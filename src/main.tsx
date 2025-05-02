import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Config } from "./Config";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    body1: {
      fontSize: "0.875rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "1rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "1.125rem", // Desktop
      },
    },
    body2: {
      fontSize: "0.75rem", // Default for mobile
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "0.875rem", // Tablet
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "1rem", // Desktop
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Config />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </>,
);
