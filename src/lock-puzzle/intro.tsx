import { Box, Typography, useTheme } from "@mui/material";

const rules = [
  { hypothesis: "682", text: "One digit is right and in its place" },
  { hypothesis: "614", text: "One digit is right but in the wrong place" },
  {
    hypothesis: "206",
    text: "Two digits are right but both are in the wrong place",
  },
  { hypothesis: "738", text: "All digits are wrong" },
  { hypothesis: "380", text: "One digit is right but in the wrong place" },
];

const Intro = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography variant="h4">Lock Puzzle</Typography>
      <Typography variant="body1">
        After seeing these types of puzzles online a handful of times I thought
        it would be more fun to write a solver for them.
      </Typography>
      <Typography variant="body1">
        The puzzle is to find a 3 digit pin that opens a lock using a series of
        clues. In general, the clues will give a hypothetical pin and then tell
        you the number of digits that correctly included in the solution and how
        many are in the correct position.
      </Typography>
      <Typography variant="h6">Example Puzzle:</Typography>
      {rules.map((rule) => (
        <Typography key={rule.hypothesis} variant="body1">
          <span style={{ fontWeight: theme.typography.fontWeightBold }}>
            {rule.hypothesis}
          </span>{" "}
          - {rule.text}
        </Typography>
      ))}
    </Box>
  );
};

export default Intro;
