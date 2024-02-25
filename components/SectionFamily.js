import { Alert, FlatList, RefreshControl, SectionList, Text, View} from "react-native";
import { UserItem } from "./UserItem";
import { useEffect, useState } from "react";
import { appStyles } from "../styles/app";
import { familyData } from "../data/constants";
export default function SectionFamily() {
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
        <SectionList sections={familyData} renderSectionHeader={({section})=>(
    <View style={appStyles.userItem}>
      <Text style={appStyles.text}>
        {section.role}
      </Text>
    </View>)}
    renderItem={({item})=>
    <View >
      <Text style={appStyles.sectionText}>
        {item}
      </Text>
    </View>}
    />
    </View>
  );
}
