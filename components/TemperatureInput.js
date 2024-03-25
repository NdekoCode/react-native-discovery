import { Text, TextInput, View } from "react-native";
import { tempStyle } from "../styles/tempConverter.style";

export const TemperatureInput = ({ temp = 0, onChangeText }) => {
  return (
    <View style={tempStyle.textInputContainer}>
      <TextInput
        keyboardType="numeric"
        value={String(0)}
        placeholder="Enter unity to Converter"
        onChangeText={onChangeText}
        maxLength={4}
        style={tempStyle.textInput}
      />
      <Text style={tempStyle.textInputLabel}>{temp}° C</Text>
    </View>
  );
};
