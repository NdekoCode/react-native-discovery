import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { tempStyle } from "./styles/tempConverter.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import { TemperatureInput } from "./components/TemperatureInput";
import { TemperatureDisplay } from "./components/TemperatureDisplay";
import { useState } from "react";
import coldBackground from "./assets/cold.png";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./libs/data/constants";
import {
  celciusToFahrenheit,
  fahrenheitToCelcius,
  getOppositeUnit,
} from "./services/temperature.service";
const tempToDisplay = {
  C: "Celcius",
  F: "Fahrenheit",
};
export const TempConverter = () => {
  const [temp, setTemp] = useState(DEFAULT_TEMPERATURE);
  const [unit, setUnit] = useState(DEFAULT_UNIT);
  const [temperatureDisplay, setTemperatureDisplay] = useState(
    DEFAULT_TEMPERATURE
  );
  const onChangeText = (value) => {
    setTemp(Number(value));
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
        source={temperatureDisplay > 0 ? hotBackground : coldBackground}
        style={{ ...tempStyle.container }}
      >
        <SafeAreaView>
          <View style={tempStyle.workspace}>
            <TemperatureDisplay
              value={temperatureDisplay}
              unit={getOppositeUnit(unit)}
            />
            <TemperatureInput
              value={temp}
              unit={unit}
              onChangeText={onChangeText}
            />
            <TouchableOpacity
              onPress={handleConverter}
              style={tempStyle.buttonApp}
            >
              <Text style={tempStyle.buttonApp.text}>
                Convertir en {tempToDisplay[getOppositeUnit(unit)]}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};
