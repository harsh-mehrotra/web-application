"use client";
import React, { useState } from "react";
import { Box, Tab, Tabs, Typography, Stack, Button, List } from "@mui/material";
import CustomContainer from "@/theme/CustomeContainer";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";

// items
const Items = ["All Products", "T-Shirt", "Hoodies", "Jacket"];

const NewsLetterSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box mt={4} mb={4}>
        <CustomContainer>
          <Box mt={2} sx={{ width: "100%" }}>
            <Stack>
                <Typography variant={{xs:"h1",md:"51"}}>Or subscribe to the newsletter</Typography>
            </Stack>
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <div
              role="tabpanel"
              hidden={value !== 0}
              id={`simple-tabpanel-0`}
              aria-labelledby={`simple-tab-0`}
            >
              {value === 0 && (
                <Box sx={{ p: 3 }}>
                  <Typography>three</Typography>
                </Box>
              )}
            </div>
            <div
              role="tabpanel"
              hidden={value !== 1}
              id={`simple-tabpanel-1`}
              aria-labelledby={`simple-tab-1`}
            >
              {value === 1 && (
                <Box sx={{ p: 3 }}>
                  <Typography>one</Typography>
                </Box>
              )}
            </div>
            <div
              role="tabpanel"
              hidden={value !== 2}
              id={`simple-tabpanel-2`}
              aria-labelledby={`simple-tab-2`}
            >
              {value === 2 && (
                <Box sx={{ p: 3 }}>
                  <Typography>two</Typography>
                </Box>
              )}
            </div> */}
            <Stack
              direction={"row"}
              mt={2}
              mb={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <List
                sx={{
                  mt: 1.5,
                  width: "50%",
                  position: "relative",
                  overflow: "auto",
                  color: "gray",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  "& ul": { padding: 0 },
                  "& li": {
                    transition: "color 0.3s ease-in-out",
                    cursor: "pointer",
                    // textShadow: "1px 1px 2px rgba(0,0,0,0.275)",
                    "&:hover": {
                      color: "#FF6F61",
                    },
                  },
                  "& li.active": {
                    color: "black", // Color for active item
                    // Add more styles for active item
                  },
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                  overflowX: "scroll",
                  maxWidth: "80%",
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
                  <li
                    key={`section-${index}`}
                    style={{ margin: "0 10px", fontWeight: "bold", }}
                    onClick={() => setValue(index)}
                    className={index === value ? 'active' : ''}
                  >
                    {item}
                  </li>
                ))}
              </List>

              <Button
                size="small"
                variant="contained"
                color="primary"
                startIcon={<FilterAltSharpIcon />}
                sx={{
                  borderRadius: "0",
                  fontSize: "12px",
                  background: "rgba(30,40,50,1)",
                  transition: "background 0.3s ease-in-out",
                  "&:hover": {
                    background: "#FF6F61", // Change background color on hover
                  },
                }}
              >
                Filter
              </Button>
            </Stack>
          </Box>
        </CustomContainer>
      </Box>
    </>
  );
};

export default NewsLetterSection;
