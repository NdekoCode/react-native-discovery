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
  convertTemperatureTo,
  getOppositeUnit,
} from "./services/temperature.service";
const tempToDisplay = {
  C: "Celcius",
  F: "Fahrenheit",
};
export const TempConverter = () => {
  const [temp, setTemp] = useState(DEFAULT_TEMPERATURE);
  const [unit, setUnit] = useState(DEFAULT_UNIT);
  const oppositUnit = getOppositeUnit(unit);
  const [temperatureDisplay, setTemperatureDisplay] = useState(
    convertTemperatureTo(oppositUnit, DEFAULT_TEMPERATURE)
  );
  console.log(temperatureDisplay, oppositUnit);
  const onChangeText = (value) => {
    const inputValue = Number(value);
    value = !isNaN(inputValue) ? inputValue : 0;
    setTemp(value);
  };
  const handleConverter = () => {
    setUnit(oppositUnit);
  };
  const getTempConverter = () => {
    const value = convertTemperatureTo(oppositUnit, temp);
    return !isNaN(value) ? value.toFixed(1) : 0;
  };
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={getTempConverter() > 0 ? hotBackground : coldBackground}
        style={{ ...tempStyle.container }}
      >
        <SafeAreaView>
          <View style={tempStyle.workspace}>
            <TemperatureDisplay value={getTempConverter()} unit={oppositUnit} />
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
                Convertir en {tempToDisplay[unit]}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};
