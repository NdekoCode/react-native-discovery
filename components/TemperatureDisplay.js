import { Text } from "react-native";
import { tempStyle } from "../styles/tempConverter.style";

export const TemperatureDisplay = ({ value = 0, unit = "C" }) => {
  return (
    <Text style={tempStyle.textOutput}>{`${value.toFixed(1)} °${unit}`}</Text>
  );
};
