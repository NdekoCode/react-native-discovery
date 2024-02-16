import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput } from "react-native";

import styles from "./styles/global.js";
import { Compter } from "./Compter.js";
import { useCounter } from "./libs/hooks/useCounter.js";
import UserComp from "./UserComp.js";
export default function App() {
  const [count, increment] = useCounter();
  return (
    <View style={styles.containerShadow}>
      <TextInput placeholder="Entrer votre nom" style={styles.input} auto-cordrection={false}/>
      <Text style={styles.text}>Hello Arick Bulakali {count}</Text>
      <Button title={`Increment: ${count}`} onPress={increment} />
      <Compter initialValue={5} step={2}>Hell</Compter>
      <UserComp/>
      <StatusBar style="auto" />
    </View>
  );
}
