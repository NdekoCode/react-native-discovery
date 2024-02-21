import { Alert, FlatList, RefreshControl, View} from "react-native";
import { appStyles } from "./styles/app";
import { obj } from "./data/constants";
import { UserItem } from "./components";
import { useEffect, useState } from "react";
export default function App() {
  const [isRefreshing,setIsRefreshing] = useState(false)
  const [timer,setTimer] = useState(null)
  const handleRefreshing = ()=>{
    setIsRefreshing(true);
    setTimer(setTimeout(() => {
      setIsRefreshing(false)
      Alert.alert("Finish refreshing","Your refreshing is finish",[{text:"Compris",onPress:()=>console.log("Compris")}],{cancelable:true})
    }, 2000));
  }
  console.log("Timer")
  useEffect(()=>{
    setIsRefreshing(false);
    return ()=>clearTimeout(timer);
  },[])
  return (
    <View style={appStyles.container}>
        <FlatList data={obj} refreshControl={<RefreshControl colors={['red','yellow']} onRefresh={handleRefreshing} refreshing={isRefreshing}/>} keyExtractor={(_,index)=>index} renderItem={({item})=>(<UserItem user={item}/>)}/>
    </View>
  );
}
