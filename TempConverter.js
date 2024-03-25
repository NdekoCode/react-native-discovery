import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { tempStyle } from "./styles/tempConverter.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const tempCorresponding = {
  Celcius: "F",
  Faranheit: "C",
};
export const TempConverter = () => {
  const onChangeText = (value) => {};
  const handleUnityChange = () => {};
  const celciusToFaranheit = (value) => {
    return (value * 9) / 5 + 32;
  };
  const FahrenheitToCelcius = (value) => {
    return (value - 32) / (9 / 5);
  };
  const handleConverter = () => {};
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ ...tempStyle.container }}>
        <View style={tempStyle.workspace}>
          <Text style={tempStyle.textOutput}>
            {`0 ° ${tempCorresponding["Celcius"]}`}
          </Text>
          <View style={tempStyle.textInputContainer}>
            <TextInput
              keyboardType="numeric"
              value={String(0)}
              placeholder="Enter unity to Converter"
              onChangeText={onChangeText}
              style={tempStyle.textInput}
            />
            <Text style={tempStyle.textInputLabel}>° C</Text>
          </View>
          <TouchableOpacity
            onPress={handleConverter}
            style={tempStyle.buttonApp}
          >
            <Text style={tempStyle.buttonApp.text}>Convertir en Celcius</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
