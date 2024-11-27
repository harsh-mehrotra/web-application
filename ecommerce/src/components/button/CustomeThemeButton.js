import React from "react";
import Button from "@mui/material/Button";

const CustomeThemeButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        // Add your custom styles here
        borderRadius: "8px",
        padding: "10px 20px",
        boxShadow: "none",
        borderRadius: "0px",
        background: "black",
        transition: "background 0.3s ease-in-out",
        "&:hover": {
          background: "#FF6F61", // Change background color on hover
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomeThemeButton;
