import { Box, Button, TextField } from "@mui/material";
import { Rule } from "./types";
import { useRef, useState } from "react";

type Props = {
  submit: (rule: Rule) => void;
};

const NewRule = ({ submit }: Props) => {
  const [hypothesis, setHypothesis] = useState("");
  const [rightLocation, setRightLocation] = useState<number>(0);
  const [wrongLocation, setWrongLocation] = useState<number>(0);

  const hypothesisRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (hypothesis !== "") {
      submit({ hypothesis, rightLocation: rightLocation, wrongLocation });
      // clear the form
      setHypothesis("");
      setRightLocation(0);
      setWrongLocation(0);
      // autofocus on the hypothesis field
      hypothesisRef.current?.focus();
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <TextField
        autoFocus
        required
        inputRef={hypothesisRef}
        type="number"
        label="Hypothesis"
        value={hypothesis}
        onChange={(event) => setHypothesis(event.target.value)}
      />
      <TextField
        type="number"
        label="Right number, right place"
        value={rightLocation}
        onChange={(event) => setRightLocation(Number(event.target.value))}
      />
      <TextField
        type="number"
        label="Right number, wrong place"
        value={wrongLocation}
        onChange={(event) => setWrongLocation(Number(event.target.value))}
      />
      <Button type="submit" disabled={hypothesis === ""} onClick={onSubmit}>
        Save Rule
      </Button>
    </Box>
  );
};

export default NewRule;
