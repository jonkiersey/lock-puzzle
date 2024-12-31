import { Rule } from "./types";

const countDigitsInRightPlace = (solution: string, hypothesis: string) => {
  let count = 0;
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === hypothesis[i]) {
      count++;
    }
  }
  return count;
};

const countDigitsInWrongPlace = (solution: string, hypothesis: string) => {
  let count = 0;
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] !== hypothesis[i] && hypothesis.includes(solution[i])) {
      count++;
    }
  }
  return count;
};

const findSolutions = (rules: Rule[]) => {
  const solutions = Array.from({ length: 1000 }, (_, i) => ({
    value: i.toString().padStart(3, "0"),
    isPossible: true,
  }));

  for (const rule of rules) {
    for (const solution of solutions) {
      if (!solution.isPossible) {
        continue;
      }
      const digitsInWrongPlace = countDigitsInWrongPlace(
        solution.value,
        rule.hypothesis
      );
      const digitsInRightPlace = countDigitsInRightPlace(
        solution.value,
        rule.hypothesis
      );
      if (
        digitsInRightPlace !== rule.rightLocation ||
        digitsInWrongPlace !== rule.wrongLocation
      ) {
        solution.isPossible = false;
      }
    }
  }
  return solutions
    .filter(({ isPossible }) => isPossible)
    .map(({ value }) => value);
};

export default findSolutions;
