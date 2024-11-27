import React from "react";
import { Box, Typography } from "@mui/material";

const CategoryCard = ({ data }) => {
  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          position: "relative",
          "& > div": {
            display: "none",
          },
          "&:hover": {
            "& > div": {
              display: "inline-block",
              display: "flex",
              direction: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
              opacity: 1,
            },
            "& > label": {
              background: "#FF6F61",
            },
          },
        }}
      >
        <img
          src={data?.categoryImage}
          alt={data?.categoryName}
          width={"100%"}
          height={"100%"}
        />
        {data?.sailTag ? (
          <Box
            position={"absolute"}
            component={"label"}
            bgcolor={"rgba(30,40,50,1)"}
            color={"white"}
            fontSize={"8px"}
            textTransform={"uppercase"}
            fontFamily={"sans-serif"}
            py={0.6}
            px={1}
            top={20}
            left={-0.5}
            sx={{ transition: "background 0.3s ease-in-out" }}
          >
            {data?.sailTag}
          </Box>
        ) : (
          ""
        )}

        <Box
          component={"div"}
          bgcolor={"rgba(30,40,50,1)"}
          sx={{
            width: "100%",
            boxSizing: "border-box",
            position: "absolute",
            bottom: 2,
            left: 0,
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: "10px",
            px: "2%",
            py: 1,
            transition: "opacity 0.3s ease-in-out",
            opacity: 0,
            height: 0,
          }}
        >
          <Typography variant="body2" fontSize="10px" component={"span"}>
            {data?.categoryName}
          </Typography>
          <Typography variant="body2" fontSize="10px" component={"span"}>
            {data?.noOfProducts} Product
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CategoryCard;
