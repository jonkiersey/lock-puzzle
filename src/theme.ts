import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#a34172",
        },
        secondary: {
          main: "#00e5ff",
        },
      },
    },
  },
});

export default theme;
