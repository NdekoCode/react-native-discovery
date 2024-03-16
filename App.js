import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { BeginNative } from "./components/BeginNative/BeginNative";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <BeginNative />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
