import { Rule } from "./types";

const numberToWord = (number: number) => {
  switch (number) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    default:
      return number.toString();
  }
};

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const plural = (singular: string, number: number, plural?: string) =>
  number === 1 ? singular : plural !== undefined ? plural : singular + "s";

const rightLocationText = (rightLocation: number) =>
  `${numberToWord(rightLocation)} ${plural("digit is", rightLocation, "digits are")} right and in the right place`;

const wrongLocationText = (wrongLocation: number) =>
  `${numberToWord(wrongLocation)} ${plural("digit is", wrongLocation, "digits are")} right but in the wrong place`;

const getRuleText = (rule: Rule) => {
  if (rule.rightLocation === 0 && rule.wrongLocation === 0) {
    return "All digits are wrong";
  }
  if (rule.rightLocation === 0) {
    return capitalize(wrongLocationText(rule.wrongLocation));
  }
  if (rule.wrongLocation === 0) {
    return capitalize(rightLocationText(rule.rightLocation));
  }
  return `${capitalize(rightLocationText(rule.rightLocation))} and ${wrongLocationText(rule.wrongLocation)}`;
};

export { capitalize, numberToWord, plural, getRuleText };
