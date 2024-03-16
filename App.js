import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { BeginNative } from "./BeginNative";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <BeginNative />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
