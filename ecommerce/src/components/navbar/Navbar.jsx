"use client";
import { useState } from "react";
import CustomContainer from "@/theme/CustomeContainer";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import PersonIcon from "@mui/icons-material/PersonRounded";
import NavCategoryItems from "./NavCategoryItems";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box
      bgcolor={"whitesmoke"}
      // sx={{ position: "fixed", width: "100%%", zIndex: 100 }}
    >
      <CustomContainer>
        <AppBar
          position="static"
          sx={{
            bgcolor: "transparent",
            borderBottom: "1px solid lightgray",
            margin: "0px",
            zIndex: 2,
            top: 0,
          }}
          elevation={0}
        >
          <Toolbar disableGutters>
            <Grid
              px={0}
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                mx={0}
                md={4}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                order={2}
                flexDirection={"row"}
                // bgcolor={{ xs: "#FF6F61", md: "transparent" }}
                // bgcolor={{ xs: "#FF6F61", md: "transparent" }}

                container
              >
                {/* <ArchitectureIcon /> */}
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
                {/* <LinearScaleIcon /> */}
              </Grid>
              {/* Right-aligned content */}
              <Grid
                item
                xs={12}
                md={4}
                display={"flex"}
                justifyContent={{
                  xs: "space-between",
                  md: "end",
                  sm: "start",
                }}
                flexDirection={"row"}
                alignItems={"center"}
                order={{ xs: 2, md: 3 }}
                fontFamily={"sans-serif"}
                fontWeight={400}
              >
                <Button
                  startIcon={<PersonIcon />}
                  size="small"
                  variant="text"
                  disableRipple
                  sx={{
                    color: "black",
                    backgroundColor: "transparent",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "#FF6F61",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Account
                </Button>

                <Button
                  startIcon={<ShoppingBagRoundedIcon />}
                  size="small"
                  disableRipple
                  variant="text"
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    backgroundColor: "transparent",
                    "&:hover": {
                      color: "#FF6F61",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Shopping
                </Button>
              </Grid>
              {/* Left-aligned content */}
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"start"}
                order={{ xs: 3, md: 1 }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="search.."
                  sx={{
                    // width: "50px",
                    // maxWidth: "200px",
                    width: "120px",
                    outline: "none",
                    border: "none",

                    transition: "width 0.3s ease-in 0.2s",
                    "&:hover": {
                      width: "100%",
                      // maxWidth: "200px",
                    },
                    "& .MuiOutlinedInput-root": {
                      // borderRadius: "0px",
                      borderRadius: "25px",
                      "& fieldset": {
                        border: "none", // Remove the outline
                      },

                      "&:hover fieldset": {
                        border: "none", // Remove the outline on hover
                        // borderBottom: "1px solid lightgray",
                        // border: "1px solid black",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none", // Remove the outline when focused
                        // border: "1px solid black",
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </CustomContainer>
      <CustomContainer>
        <NavCategoryItems />
      </CustomContainer>
    </Box>
  );
};

export default Navbar;
