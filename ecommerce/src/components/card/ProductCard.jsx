import React from "react";
import { Box } from "@mui/material";

const ProductCard = ({ data }) => {
  return (
    <>
      <Box width={"100%"} height={"100%"}>
        <img
          src={data.productImg}
          alt={data.productName}
          width={"100%"}
          height={"100%"}
        />
        <Box
          component={"div"}
          height={"30px"}
          width={"1005"}
          bgcolor={"rgba(30,40,50,1)"}
        ></Box>
      </Box>
    </>
  );
};

export default ProductCard;
