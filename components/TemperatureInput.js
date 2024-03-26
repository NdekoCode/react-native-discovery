import { Text, TextInput, View } from "react-native";
import { tempStyle } from "../styles/tempConverter.style";

export const TemperatureInput = ({ value = 0, unit = "C", onChangeText }) => {
  return (
    <View style={tempStyle.textInputContainer}>
      <TextInput
        keyboardType="numeric"
        value={String(value)}
        placeholder="Enter unity to Converter"
        onChangeText={onChangeText}
        maxLength={4}
        style={tempStyle.textInput}
      />
      <Text style={tempStyle.textInputLabel}>° {unit}</Text>
    </View>
  );
};
