import React from "react";
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// import Sidebar from "../src/components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
} from "./components";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Box>
          {/* <Sidebar /> */}
          <Navbar />
          <Routes>
            <Route path="" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
