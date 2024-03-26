import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import appStyle from "./styles/app.style";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const renderItem = ({ item }) => (
    <View style={appStyle.card}>
      <Text>Nom: {`${item.firstName} ${item.lastName}`}</Text>
      <Text>Age: {item.age}</Text>
    </View>
  );
  const keyGenerate = (user) => user.id;
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users);

        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <View style={appStyle.content}>
      {isLoading && <Text>Loading...</Text>}

      {!isLoading && users.length > 0 && (
        <FlatList
          style={appStyle.appView}
          data={users}
          renderItem={renderItem}
          keyExtractor={keyGenerate}
        />
      )}
    </View>
  );
};
export default Users;
