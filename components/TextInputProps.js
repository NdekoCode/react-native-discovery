import {
  Button,
  TextInput,
  View,
  Keyboard,
  Pressable,
  Modal,
  Text,
  Alert,
} from "react-native";
import { useState } from "react";
import appStyle from "../styles/app.style";

export const TextInputProps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onHandlePress = () => {
    Keyboard.dismiss();
    handleClose();
  };
  const handlePress = () => {
    setIsVisible((c) => !c);
  };
  const handleClose = () => {
    Alert.alert(
      "Add product",
      "Your product is added",
      [{ text: "compris", onPress: handlePress }],
      {
        cancelable: true,
      }
    );
  };
  return (
    <View style={appStyle.inputContainer}>
      <Pressable onPress={handlePress} style={appStyles.buttonText}>
        <Text style={appStyle.buttonText.text}>Add new Product</Text>
      </Pressable>
      <Modal
        onRequestClose={handleClose}
        visible={isVisible}
        animationType="slide"
        transparent
      >
        <View style={appStyle.modalContainer}>
          <View
            style={{ backgroundColor: "#fff", borderRadius: 10, padding: 20 }}
          >
            <TextInput
              style={{ ...appStyle.textInput, borderRadius: 4 }}
              placeholder="Enter your new product"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
            />
            <Button title="Valider" onPress={onHandlePress} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
