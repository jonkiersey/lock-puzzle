import { Box, useTheme } from "@mui/material";
import Intro from "./intro";
import Solver from "./solver";

const LockPuzzle = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: "16px",
        background: theme.palette.background.default,
      }}
    >
      <Intro />
      <Solver />
    </Box>
  );
};

export default LockPuzzle;
