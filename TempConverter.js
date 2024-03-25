import { View } from "react-native";
import { tempStyle } from "./styles/tempConverter.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const TempConverter = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={tempStyle.container}>
        <View style={tempStyle.workspace}></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
