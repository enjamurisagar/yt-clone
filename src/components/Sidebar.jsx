import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "94%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          className="category-btn"
          style={{
            background: cat.name === selectedCategory && "#fC1503",
            color: "#fff",
          }}
          key={cat.name}
          onClick={() => setSelectedCategory(cat.name)}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
