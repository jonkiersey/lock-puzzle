import { Card, Typography } from "@mui/material";
import { Rule } from "../types";
import SatisfiedRule from "./satisfied-rule";

type Props = {
  solution: string;
  rules: Rule[];
};

const Solution = ({ solution, rules }: Props) => {
  return (
    <Card sx={{ padding: "16px" }}>
      <Typography variant="h6">
        Solution: <b>{solution}</b>
        {rules.map((rule) => (
          <SatisfiedRule
            key={rule.hypothesis}
            rule={rule}
            solution={solution}
          />
        ))}
      </Typography>
    </Card>
  );
};

export default Solution;
