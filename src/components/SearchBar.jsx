import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton, InputBase } from "@mui/material";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      elevation={2}
      onSubmit={() => {}}
      sx={{
        borderRadius: 3,
        background: "#222",
        p: "2px 6px",
        display: "flex",
        alignItems: "center",
        width: 350,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, p: 1, m: 0, fontSize: 14 }}
        placeholder="Search..."
        onChange={() => {}}
      />
      <IconButton type="submit" style={{ fontSize: 20 }}>
        <FiSearch />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
