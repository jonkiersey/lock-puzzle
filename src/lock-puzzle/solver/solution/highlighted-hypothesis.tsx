import { useTheme } from "@mui/material";

type Props = {
  hypothesis: string;
  solution: string;
};
const HightlightedHypothesis = ({ hypothesis, solution }: Props) => {
  const theme = useTheme();
  return (
    <>
      {hypothesis
        .split("")
        .map((char) =>
          solution.includes(char) ? (
            <span
              style={{
                color: theme.palette.success.main,
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              {char}
            </span>
          ) : (
            <span>{char}</span>
          )
        )}
    </>
  );
};

export default HightlightedHypothesis;
