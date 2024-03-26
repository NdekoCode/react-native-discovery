import { UNITS } from "../libs/data/constants";

const getOppositeUnit = (unit) => {
  return UNITS.celsius === unit ? "F" : "C";
};

const celciusToFahrenheit = (value) => {
  return (value * 9) / 5 + 32;
};
const fahrenheitToCelcius = (value) => {
  return (value - 32) / (9 / 5);
};
export { getOppositeUnit, celciusToFahrenheit, fahrenheitToCelcius };
