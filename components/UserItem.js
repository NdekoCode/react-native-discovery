import { Text, View } from "react-native";
import appStyle from "../styles/app.style";

export const UserItem = ({ user }) => {
  return (
    <View style={appStyle.userItem}>
      <Text style={appStyle.text}>
        Nom: {user.data[0]} | Age: {user.data[1]}
      </Text>
    </View>
  );
};
