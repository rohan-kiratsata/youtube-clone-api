// import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ICONS } from "../utils/constant";
import { StyledEngineProvider } from "@mui/material/styles";

import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    // <div>
    //   <Stack
    //     direction="row"
    //     alignItems="center"
    //     p={2}
    //     sx={{
    //       position: "sticky",
    //       background: "#333",
    //       top: 0,
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <Link
    //       to="/"
    //       style={{ display: "flex", alignItems: "center", fontSize: 32 }}
    //     >
    //       {ICONS.Youtube}
    //     </Link>
    //     <SearchBar />
    //   </Stack>
    // </div>
    <StyledEngineProvider injectFirst>
      <header className="flex flex-row items-center p-2 sticky bg-zinc-800 top-0 justify-between">
        <Link to="/" className="flex items-center text-3xl">
          {ICONS.Youtube}
        </Link>
        <SearchBar />
      </header>
    </StyledEngineProvider>
  );
};

export default Navbar;
