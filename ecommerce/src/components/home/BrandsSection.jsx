import React from "react";
import { List, Box } from "@mui/material";
import CustomContainer from "@/theme/CustomeContainer";

const brands = [
  {
    url: "/assets/brands/brand-1.png",
    name: "brand1",
  },
  {
    url: "/assets/brands/brand-2.png",
    name: "brand2",
  },
  {
    url: "/assets/brands/brand-3.png",
    name: "brand3",
  },
  {
    url: "/assets/brands/brand-4.png",
    name: "brand4",
  },
  {
    url: "/assets/brands/brand-5.png",
    name: "brand5",
  },
];

const BrandsSection = () => {
  return (
    <Box mt={2} py={2} mb={2}>
      <CustomContainer>
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
          {brands.map((brand, index) => (
            <li key={`section-${index}`} >
              <img alt={brand.name} src={brand.url} width={"150px"} />
            </li>
          ))}
        </List>
      </CustomContainer>
    </Box>
  );
};

export default BrandsSection;
