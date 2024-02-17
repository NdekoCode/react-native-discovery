import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput, ScrollView } from "react-native";

import styles from "./styles/global.js";
import { Compter } from "./Compter.js";
import { useCounter } from "./libs/hooks/useCounter.js";
import UserComp from "./UserComp.js";
import { useEffect, useState } from "react";
import Users from "./Users.js";
export default function App() {
  const [count, increment] = useCounter();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleChangeText = (text) => {
    setName(text);
  };
  const handleAgeChange = (nb) => {
    setAge(nb);
  };

  return (
    <View style={styles.appView}>

      <>
        <Text> {name}</Text>
        <TextInput
          placeholder="Entrer votre nom"
          value={name}
          style={styles.input}
          onChangeText={handleChangeText}
          auto-cordrection={false}
        />
      </>
      <>
        <Text>Age: {age}</Text>
        <TextInput style={styles.input} placeholder="Enter your age" maxLength={3} keyboardType="numeric" />
      </>
      <Users/>
      <Text style={styles.text}>Hello Arick Bulakali {count}</Text>
      <Button title={`Increment: ${count}`} onPress={increment} />
      <Compter initialValue={5} step={2}>
        Hell
      </Compter>
      <UserComp />
      <StatusBar style="auto" />
    </View>
  );
}
