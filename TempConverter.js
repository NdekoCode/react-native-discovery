import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { tempStyle } from "./styles/tempConverter.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import { TemperatureInput } from "./components/TemperatureInput";
import { TemperatureDisplay } from "./components/TemperatureDisplay";
import { useEffect, useState } from "react";
// import coldBackground from './assets/cold.png';
const tempCorresponding = {
  C: "Celcius",
  F: "Fahrenheit",
};
const tempToDisplay = {
  C: "Fahrenheit",
  F: "Celcius",
};
export const TempConverter = () => {
  const [temp, setTemp] = useState(0);
  const [unit, setUnit] = useState("C");
  const [unitToDisplay, setUnitToDisplay] = useState("C");
  const [temperatureDisplay, setTemperatureDisplay] = useState(0);
  useEffect(() => {
    handleConverter();
  }, []);
  const onChangeText = (value) => {
    setTemp(Number(value));
  };
  const celciusToFahrenheit = (value) => {
    return (value * 9) / 5 + 32;
  };
  const fahrenheitToCelcius = (value) => {
    return (value - 32) / (9 / 5);
  };
  const handleConverter = () => {
    if (unit === "C") {
      setTemperatureDisplay(celciusToFahrenheit(temp));
      setUnit("F");
    } else {
      setTemperatureDisplay(fahrenheitToCelcius(temp));
      setUnit("C");
    }
  };
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={hotBackground}
        style={{ ...tempStyle.container }}
      >
        <SafeAreaView>
          <View style={tempStyle.workspace}>
            <TemperatureDisplay value={temperatureDisplay} unit={unit} />
            <TemperatureInput
              value={temp}
              unit={tempToDisplay[unit][0]}
              onChangeText={onChangeText}
            />
            <TouchableOpacity
              onPress={handleConverter}
              style={tempStyle.buttonApp}
            >
              <Text style={tempStyle.buttonApp.text}>
                Convertir en {tempToDisplay[unit]}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};
