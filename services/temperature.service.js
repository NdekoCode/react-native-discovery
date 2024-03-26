import { UNITS } from "../libs/data/constants";

const getOppositeUnit = (unit) => {
  return UNITS.celsius === unit ? "F" : "C";
};
const celciusToFahrenheit = (value) => {
  return value * 1.8 + 32;
};
const fahrenheitToCelcius = (value) => {
  console.log(value);
  return (value - 32) / 1.8;
};

const convertTemperatureTo = (unit, value) => {
  if (unit === UNITS.celsius) {
    // Donc tu veux aller vers les celcius
    return fahrenheitToCelcius(value);
  }
  //   Donc tu veux aller vers le fahrenheit
  return celciusToFahrenheit(value);
};
export {
  getOppositeUnit,
  celciusToFahrenheit,
  fahrenheitToCelcius,
  convertTemperatureTo,
};
