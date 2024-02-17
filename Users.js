import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native"
import styles from "./styles/global";

const Users =()=>{

  const [isLoading, setIsLoading] = useState(false);
  const [users,setUsers] = useState([]);
  const renderItem = ({item})=> (
    <View style={styles.card}>
      <Text>Nom: {`${item.firstName} ${item.lastName}`}</Text>
      <Text>Age: {item.age}</Text>
    </View>)
  const keyGenerate = (user)=>user.id
  useEffect(()=>{
    (async()=>{
      setIsLoading(true);
    const res = await fetch('https://dummyjson.com/users');
    if(res.ok){
      const data = await res.json();
      setUsers(data.users)

      setIsLoading(false);
    }else{

      setIsLoading(false);
    }
    })()
  },[])
    return <View style={styles.content}>
    {isLoading && <Text>Loading...</Text>}
  
      {(!isLoading && users.length>0) && 
      <FlatList
      style={styles.appView}
        data={users}
        renderItem={renderItem}
        keyExtractor={keyGenerate}
      />}
    </View>
}
export default Users;