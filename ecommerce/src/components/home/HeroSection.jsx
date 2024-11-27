import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import CustomContainer from "@/theme/CustomeContainer";
import CustomeThemeButton from "@/components/button/CustomeThemeButton";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
const HeroSection = () => {
  return (
    <Box
      bgcolor={"whitesmoke"}
      sx={{ position: "relative", minHeight: "450px" }}
    >
      <Box
        sx={{
          position: "absolute",
          left: -10,
          bottom: 50,
          zIndex: 1,
          width: "80px",
        }}
      >
        <img src="/assets/cover/fourleaves.png" alt="left" width={"100%"} />
      </Box>
      <Box sx={{ position: "absolute", right: 0, bottom: 80, zIndex: 1 }}>
        <img
          src="/assets/cover/floralleaves.png"
          alt="right"
          height={"200px"}
          width={"120px"}
        />
      </Box>
      <CustomContainer>
        <Grid
          mt={2}
          py={2}
          mb={2}
          // bgcolor={"red"}
          width={"100%"}
          container
          rowGap={4}
          sx={{ minHeight: "450px" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            // height={"100%"}
            // bgcolor={"red"}
            sx={{
              display: "flex",
              flexDirection: "column", // Set direction to column
              alignItems: "start", // Center items vertically
              justifyContent: "center",
            }}
          >
            <Typography
              mt={3}
              variant="h3"
              fontFamily={"sans-serif"}
              fontWeight={"200"}
            >
              Collections
            </Typography>
            <Typography
              variant="body2"
              mt={2}
              component={"p"}
              sx={{
                textWrap: "wrap",
                lineHeight: "40px",
                fontSize: "18px",
                textTransform: "capitalize",
              }}
            >
              you can explore ans shop many different collection from various
              brands here.
            </Typography>
            <Stack mt={4}>
              <CustomeThemeButton startIcon={<ShoppingBagRoundedIcon />}>
                Shop Now
              </CustomeThemeButton>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column", // Set direction to column
              alignItems: "center", // Center items vertically
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "370px",
                width: "290px",
                border: "2px solid lightgrey",
                borderRadius: "30% 0",
                position: "relative",
              }}
            >
              <Box
                component={"img"}
                src="/assets/images/brandcollectionheadimage.png"
                alt="herosection"
                width={"100%"}
                height={"100%"}
                sx={{
                  position: "absolute",
                  top: -10,
                  right: 13,
                  borderRadius: "30% 0",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default HeroSection;
