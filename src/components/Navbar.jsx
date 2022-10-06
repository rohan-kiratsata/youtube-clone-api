import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ICONS } from "../utils/constant";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          top: 0,
          background: "#1B1B1B",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", fontSize: 32 }}
        >
          {ICONS.Youtube}
        </Link>
        <SearchBar />
      </Stack>
    </div>
  );
};

export default Navbar;
