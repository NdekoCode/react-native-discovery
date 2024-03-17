import { View } from "react-native";
import { flexDemoStyles } from "./FlexDemo.style";
import { CheckOS } from "../CheckOS/CheckOS";
export const FlexDemo = () => {
  return (
    <View>
      <CheckOS />
      <View style={flexDemoStyles.container}>
        <View style={flexDemoStyles.box}></View>
        <View style={flexDemoStyles.box2}></View>
        <View style={flexDemoStyles.box3}></View>
        <View style={flexDemoStyles.box1}></View>
      </View>
    </View>
  );
};
