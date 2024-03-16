import { Text, View } from "react-native";
import { beginStyles } from "./BeginNative.style";
export const BeginNative = () => {
  return (
    <View style={beginStyles.container}>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  );
};
