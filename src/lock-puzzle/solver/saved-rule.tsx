import { Button, Card, styled, Typography } from "@mui/material";
import { Rule } from "./types";
import { getRuleText } from "./utils";

type Props = {
  rule: Rule;
  deleteRule: () => void;
};

const Container = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  padding: 4,
  "&:hover": {
    ".MuiButton-root": {
      visibility: "visible",
    },
  },
});

const DeleteButton = styled(Button)({
  visibility: "hidden",
});

const SavedRule = ({ rule, deleteRule }: Props) => {
  return (
    <Container>
      <Typography variant="body1">
        <b>{rule.hypothesis}</b> - {getRuleText(rule)}
      </Typography>
      <DeleteButton color="error" onClick={deleteRule}>
        Delete
      </DeleteButton>
    </Container>
  );
};

export default SavedRule;
