"use client";
import React from "react";
import List from "@mui/material/List";

const Items = [
  "Jewelry & Accessories",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft Supplies & Tools",
];

const NavCategoryItems = () => {
  return (
    <List
      sx={{
        mt: 1.5,
        width: "100%",
        position: "relative",
        overflow: "auto",
        color: "black",
        fontSize: "12px",
        fontFamily: "sans-serif",
        "& ul": { padding: 0 },
        "& li": {
          transition: "color 0.3s ease-in-out",
          cursor: "pointer",
          textShadow: "1px 1px 2px rgba(0,0,0,0.275)",
          "&:hover": {
            color: "#FF6F61",
          },
        },

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "scroll",
        maxWidth: "100%",
        textWrap: "nowrap",
        scrollbarWidth: "none", // Hide scrollbar for Firefox
        "-ms-overflow-style": "none", // Hide scrollbar for IE/Edge
        "&::-webkit-scrollbar": {
          // Hide scrollbar for WebKit (Chrome, Safari)
          display: "none",
        },
      }}
    >
      {Items.map((item, index) => (
        <li key={`section-${index}`} style={{ margin: "0 10px" }}>
          {item}
        </li>
      ))}
    </List>
  );
};

export default NavCategoryItems;
