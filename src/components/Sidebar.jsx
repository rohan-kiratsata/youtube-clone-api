import { useState } from "react";
import { Stack, Drawer, Box } from "@mui/material";
import { categories } from "../utils/constant";

const selectedCategory = "New";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {/* eslint-disable-next-line array-callback-return */}
      {categories.map((cat) => {
        <button
          className="category-btn"
          style={{
            background: cat.name === selectedCategory && "#555",
            color: "white",
          }}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>;
      })}
    </Stack>
  );
};

export default Sidebar;
