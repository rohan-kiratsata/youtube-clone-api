import { useState } from "react";
import { Stack, Drawer, Box } from "@mui/material";
import { categories } from "../utils/constant";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "100%" },
        flexDirection: { md: "column" },
        backgroundColor: "#1B1B1B",
        p: 2,
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="category-btn"
          onClick={() => setSelectedCategory(cat.name)}
          style={{
            backgroundColor: cat.name === selectedCategory && "#212121",
          }}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
