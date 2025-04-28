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
