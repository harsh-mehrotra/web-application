import CustomContainer from "@/theme/CustomeContainer";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "../card/CategoryCard";

const categoryCardData = [
  {
    categoryName: "Manto",
    noOfProducts: "86",
    categoryImage: "/assets/category/image-category-1.png",
  },
  {
    categoryName: "Pants",
    noOfProducts: "200",
    categoryImage: "/assets/category/item-category.png",
  },
  {
    categoryName: "Coat",
    noOfProducts: "520",
    categoryImage: "/assets/category/item-category-1.png",
    sailTag: "SALE",
  },
  {
    categoryName: "Shirt",
    noOfProducts: "320",
    categoryImage: "/assets/category/item-category-2.png",
  },
  {
    categoryName: "Jacket",
    noOfProducts: "103",
    categoryImage: "/assets/category/item-category-hover1.png",
  },
];

const PopularStyleSection = () => {
  return (
    <>
      <Box mt={2} mb={2}>
        <CustomContainer>
          <Grid
            container
            rowGap={1}
            columnGap={1}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            position={"relative"}
          >
            <Box
              height={"100%"}
              //   width={{xs:"100%"}}
              boxSizing={"border-box"}
              //   bgcolor={"red"}
              textAlign={"center"}
              display={{ xs: "none", md: "flex" }}
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              top={0}
              left={-45}
              p={1}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  writingMode: "vertical-rl",
                  transform: "rotate(-180deg)",
                  textAlign: "end",
                  fontSize: { md: "17px", lg: "20px" },
                }}
              >
                Explore new and popular styles
              </Typography>
            </Box>
            <Grid item xs={12} sm={5.75}>
              <CategoryCard data={categoryCardData[0]} />
            </Grid>
            <Grid
              item
              container
              rowGap={1.5}
              columnGap={1}
              xs={12}
              sm={5.75}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"start"}
            >
              {categoryCardData?.map((categoryData, index) => {
                if (index !== 0) {
                  return (
                    <Grid key={index} item xs={5.75}>
                      {" "}
                      <CategoryCard data={categoryData} />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
    </>
  );
};

export default PopularStyleSection;
