import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import LockPuzzle from "./lock-puzzle";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: {
            xs: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
            sm: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
          },
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          padding: "16px",
          zIndex: 1,
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <LockPuzzle />
      </Box>
    </ThemeProvider>
  );
};

export default App;
