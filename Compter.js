import { Button, StyleSheet, Text, View } from "react-native";
import { useCounter } from "./libs/hooks/useCounter";

export const Compter = ({ initialValue = 0, step = 1, children }) => {
  const [count, increment, decrement] = useCounter(initialValue, step);
  return (
    <View style={compterStyle.view}>
      <Text> {count}</Text>
      <Button title={`Increment`} onPress={increment} />
      <Button title={`Decrement`} onPress={decrement} />
      <Text>{children}</Text>
    </View>
  );
};

const compterStyle = StyleSheet.create({
  view: {
    color: "green",
    fontSize: "25px",
    gap: 10,
  },
});
