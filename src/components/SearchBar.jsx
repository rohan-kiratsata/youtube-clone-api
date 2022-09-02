import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      variant="outlined"
      onSubmit={() => {}}
      sx={{
        borderRadius: 2,
        background: "#444",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        onChange={() => {}}
      />
      <IconButton type="submit">
        <FiSearch />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
