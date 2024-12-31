import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import LockPuzzle from "./lock-puzzle";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: theme.palette.primary.light,
          padding: "16px",
          minHeight: "100vh",
        }}
      >
        <LockPuzzle />
      </Box>
    </ThemeProvider>
  );
};

export default App;
