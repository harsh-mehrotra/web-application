"use client";
import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  ListItem,
  ListItemText,
  List,
  Button,
} from "@mui/material";
import CustomContainer from "@/theme/CustomeContainer";
import Image from "next/image";
import NorthIcon from "@mui/icons-material/North";

const catalogListItems = [
  { label: "Necklaces", to: "" },
  { label: "Hoodies", to: "" },
  { label: "Jewelry Box", to: "" },
  { label: "T-shirt", to: "" },
  { label: "jacket", to: "" },
];
const aboutUsListItems = [
  { label: "Our Producers", to: "" },
  { label: "Hoodies", to: "" },
  { label: "FAQ", to: "" },
  { label: "About Us", to: "" },
  { label: "Terms & Conditions", to: "" },
];
const customerServicesItems = [
  { label: "Contact Us", to: "" },
  { label: "Track Your Order", to: "" },
  { label: "Product Care & Repair", to: "" },
  { label: "Book an Appointment", to: "" },
  { label: "Shipping & Returns", to: "" },
];

// function to set the footer menu items
function FeatureList(params) {
  return (
    <List dense sx={{ mt: 0 }}>
      <ListItem>
        <Typography
          variant="body2"
          component={"p"}
          fontFamily={"sans-serif"}
          fontWeight={600}
          fontSize={"12px"}
          sx={{ textTransform: "uppercase" }}
        >
          {params.title}
        </Typography>
      </ListItem>
      {params.items.map((item, index) => (
        <ListItem key={index} sx={{cursor:"pointer",transition:"color 0.3s ease-in-out","&:hover":{
            color:"#FF6F61"
        }}}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "capitalize",
              fontSize: "10px",
              marginTop: 1,
            }}
          >
            {item.label}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

const Footer = () => {
  // function to add the scroll behaviour to top
  function scrollToTop() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Box mt={4} mb={4}>
        <CustomContainer>
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <Stack direction={"row"} alignItems={"center"}>
                <Image
                  src={"/assets/logo/boxdesign.png"}
                  alt="styluxe"
                  width={25}
                  height={13}
                />
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "serif",
                    color: "black",
                  }}
                  variant="h6"
                >
                  Styluxe
                </Typography>
                <Image
                  src={"/assets/logo/boxdesign.png"}
                  alt="styluxe"
                  width={25}
                  height={13}
                />
              </Stack>
              <Typography
                mt={2}
                variant="body2"
                component={"p"}
                sx={{
                  lineHeight: "25px",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  textTransform: "capitalize",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Grid>
            <Grid item xs={12} container sm={6} md={8}>
              <Grid
                item
                xs={12}
                sx={{ p: 0 }}
                sm={6}
                md={4}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={{ xs: "start", md: "center" }}
              >
                <FeatureList title="Catalog" items={catalogListItems} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={{ xs: "start", md: "end" }}
              >
                {" "}
                <FeatureList title="ABOUT US" items={aboutUsListItems} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={{ xs: "start", md: "end" }}
              >
                {" "}
                <FeatureList
                  title="CUSTOMER SERVICES"
                  items={customerServicesItems}
                />
              </Grid>
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
      <Box mt={2} bgcolor={"rgba(30,40,50,1)"} height={"40px"} color={"white"}>
        <CustomContainer>
          <Grid
            container
            height={"40px"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4}>
              <Typography
                variant="body2"
                fontFamily={"sans-serif"}
                fontWeight={100}
                component={"p"}
                fontSize={"12px"}
              >
                &copy; 2024-{new Date().getFullYear()} Techdocklabs inc.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                alt="payments"
                src="/assets/miscellaneous/icons_payment 1.png"
                width={"100%"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"end"}
            >
              <Button
                size="small"
                variant="contained"
                color="primary"
            
                sx={{
                  background: "transparent",
                  transition: "background 0.3s ease-in-out",
                 
                  boxShadow: "none", // Override background color
                  "&:hover": {
                    background: "#FF6F61", // Override hover background color
                  },
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  fontWeight: "100",
                }}
                endIcon={<NorthIcon />}
                onClick={scrollToTop}
              >
                Scroll To Top
              </Button>
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
    </>
  );
};

export default Footer;
