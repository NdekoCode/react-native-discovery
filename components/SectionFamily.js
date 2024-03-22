import { Alert, SectionList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { familyData } from "../data/constants";
import appStyle from "../styles/app.style";
export default function SectionFamily() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [timer, setTimer] = useState(null);
  const handleRefreshing = () => {
    setIsRefreshing(true);
    setTimer(
      setTimeout(() => {
        setIsRefreshing(false);
        Alert.alert(
          "Finish refreshing",
          "Your refreshing is finish",
          [{ text: "Compris", onPress: () => console.log("Compris") }],
          { cancelable: true }
        );
      }, 2000)
    );
  };
  console.log("Timer");
  useEffect(() => {
    setIsRefreshing(false);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={appStyle.container}>
      <SectionList
        sections={familyData}
        renderSectionHeader={({ section }) => (
          <View style={appStyle.userItem}>
            <Text style={appStyle.text}>{section.role}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View>
            <Text style={appStyle.sectionText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
