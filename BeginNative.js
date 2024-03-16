import { StyleSheet, Text, View } from "react-native";
const appStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
export const BeginNative = () => {
  return (
    <View style={appStyles.container}>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  );
};
