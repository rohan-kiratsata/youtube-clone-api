import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, StyledEngineProvider } from "@mui/system";
import { ThemeProvider } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: root,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: root,
      },
    },
  },
});

root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </StyledEngineProvider>
);
