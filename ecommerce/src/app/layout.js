import { Inter } from "next/font/google";
import { Box, CssBaseline, Grid } from "@mui/material";
import { ThemeContext } from "@/theme/theme";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Styluxe | Online Store",
  description: "E commerce is the application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: "0px", margin: "0px" }}>
        <ThemeContext>
          {/* <CssBaseline /> */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"row"}
            bgcolor={"black"}
            minHeight={"100vh"}
            overflow={"auto"}
            height={"100%"}
            width={"100%"}
          >
            <Box
              sx={{
                backgroundColor: "white",
                // width: { md: "83%", xs: "100%" },
                width: "100%",
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeContext>
      </body>
    </html>
  );
}
