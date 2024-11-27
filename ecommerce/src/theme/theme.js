"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = ({ children }) => {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
        },
      },
      MuiSwitch: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + $track": {
              opacity: 1,
              border: "none",
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: "1px solid #bdbdbd",
          backgroundColor: "#fafafa",
          opacity: 1,
          transition:
            "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
      MuiAppBar: {
        colorInherit: {
          backgroundColor: "#689f30",
          color: "#fff",
        },
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
      MuiList: {
        dense: true,
      },
      MuiMenuItem: {
        dense: true,
      },
      MuiTable: {
        size: "small",
      },
      MuiButton: {
        size: "small",
      },
      MuiButtonGroup: {
        size: "small",
      },
      MuiCheckbox: {
        size: "small",
      },
      MuiFab: {
        size: "small",
      },
      MuiFormControl: {
        margin: "dense",
        size: "small",
      },
      MuiFormHelperText: {
        margin: "dense",
      },
      MuiIconButton: {
        size: "small",
      },
      MuiInputBase: {
        margin: "dense",
      },
      MuiInputLabel: {
        margin: "dense",
      },
      MuiRadio: {
        size: "small",
      },
      MuiSwitch: {
        size: "small",
      },
      MuiTextField: {
        margin: "dense",
        size: "small",
      },
      MuiTooltip: {
        arrow: true,
      },
      MuiAppBar: {
        color: "inherit",
      },
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
