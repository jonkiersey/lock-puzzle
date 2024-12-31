import { Box, Button, Paper } from "@mui/material";
import { useState } from "react";
import { Rule } from "./types";
import NewRule from "./new-rule";
import SavedRule from "./saved-rule";
import findSolutions from "./find-solutions";
import Solution from "./solution";

const Solver = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [solutions, setSolutions] = useState<string[]>([]);

  const clear = () => {
    setRules([]);
    setSolutions([]);
  };

  const onCreateNewRule = (rule: Rule) => {
    setRules((prev) => prev.concat(rule));
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: "16px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {rules.map((rule, index) => (
          <SavedRule
            key={rule.hypothesis}
            rule={rule}
            deleteRule={() => setRules((prev) => prev.toSpliced(index, 1))}
          />
        ))}
      </Box>
      <NewRule submit={onCreateNewRule} />
      <Box sx={{ display: "flex", gap: "16px" }}>
        {rules.length > 0 && (
          <Button
            variant="contained"
            onClick={() => setSolutions(findSolutions(rules))}
          >
            Find Solutions
          </Button>
        )}
        {(rules.length > 0 || solutions.length > 0) && (
          <Button onClick={clear}>Clear</Button>
        )}
      </Box>
      {solutions.map((solution) => (
        <Solution key={solution} solution={solution} rules={rules} />
      ))}
    </Paper>
  );
};

export default Solver;
