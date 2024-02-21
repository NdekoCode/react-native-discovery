import { Text, View } from "react-native";
import { appStyles } from "../styles/app";

export const UserItem = ({ user }) => {
  return (
    <View style={appStyles.userItem}>
      <Text style={appStyles.text}>
        Nom: {user.data[0]} | Age: {user.data[1]}
      </Text>
    </View>
  );
};
