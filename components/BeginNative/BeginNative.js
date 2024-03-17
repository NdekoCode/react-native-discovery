import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FlexDemo } from "../FlexDemo/FlexDemo";
export const BeginNative = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "gray", flex: 1 }}>
        <FlexDemo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
