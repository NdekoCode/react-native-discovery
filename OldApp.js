import { Text, View, Button, TextInput } from "react-native";

import { Compter } from "./Compter.js";
import { useCounter } from "./libs/hooks/useCounter.js";
import UserComp from "./UserComp.js";
import { useState } from "react";
import Users from "./Users.js";
import appStyle from "./styles/app.style.js";
export default function OldApp() {
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
    <View style={appStyle.appView}>
      <Text> {name}</Text>
      <TextInput
        placeholder="Entrer votre nom"
        value={name}
        style={appStyle.input}
        onChangeText={handleChangeText}
        auto-cordrection={false}
      />
      <Text>Age: {age}</Text>
      <TextInput
        style={appStyle.input}
        placeholder="Enter your age"
        maxLength={3}
        keyboardType="numeric"
      />
      <Users />
      <Text style={appStyle.text}>Hello Arick Bulakali {count}</Text>
      <Button title={`Increment: ${count}`} onPress={increment} />
      <Compter initialValue={5} step={2}>
        Hell
      </Compter>
      <UserComp />
    </View>
  );
}
