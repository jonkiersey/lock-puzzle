import { Typography } from "@mui/material";
import { Rule } from "../types";
import { getRuleText } from "../utils";
import HightlightedHypothesis from "./highlighted-hypothesis";

type Props = {
  solution: string;
  rule: Rule;
};
const SatisfiedRule = ({ solution, rule }: Props) => {
  return (
    <Typography variant="body1">
      <HightlightedHypothesis
        hypothesis={rule.hypothesis}
        solution={solution}
      />{" "}
      - {getRuleText(rule)}
    </Typography>
  );
};

export default SatisfiedRule;
