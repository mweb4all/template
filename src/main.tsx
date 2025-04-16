import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Config } from "./Config";

const queryClient = new QueryClient();
const theme = createTheme({

});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Config />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
    </React.StrictMode>
  
 </>
);
