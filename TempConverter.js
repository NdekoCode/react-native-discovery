import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { tempStyle } from "./styles/tempConverter.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import { TemperatureInput } from "./components/TemperatureInput";
import { TemperatureDisplay } from "./components/TemperatureDisplay";
// import coldBackground from './assets/cold.png';
const tempCorresponding = {
  Celcius: "F",
  Faranheit: "C",
};
export const TempConverter = () => {
  const onChangeText = (value) => {};
  const handleUnityChange = () => {};
  const celciusToFahrenheit = (value) => {
    return (value * 9) / 5 + 32;
  };
  const fahrenheitToCelcius = (value) => {
    return (value - 32) / (9 / 5);
  };
  const handleConverter = () => {};
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={hotBackground}
        style={{ ...tempStyle.container }}
      >
        <SafeAreaView>
          <View style={tempStyle.workspace}>
            <TemperatureDisplay />
            <TemperatureInput />
            <TouchableOpacity
              onPress={handleConverter}
              style={tempStyle.buttonApp}
            >
              <Text style={tempStyle.buttonApp.text}>Convertir en Celcius</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};
