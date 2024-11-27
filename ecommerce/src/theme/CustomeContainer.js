import React from "react";
import { Container, Box } from "@mui/material";

const CustomContainer = ({ children, props }) => {
  return (
    <Box
      maxWidth="lg"
      sx={{
        position: "relative",
        marginX: { xs: "5%", sm: "15%" },
        display: "flex",
        justifyContent: "center",
        position: "static",
        // bgcolor: "yellow",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
