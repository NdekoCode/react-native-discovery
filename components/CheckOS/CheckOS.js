import { View, Platform, Text } from "react-native";
export const CheckOS = () => {
  const OS = {
    ios: <Text>Hello IS</Text>,
    android: <Text>Hello Android</Text>,
  };
  return <View>{OS[Platform.OS]}</View>;
};
