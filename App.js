import { View } from "react-native";
import FamilyApp from "./components/FamilyApp";
import SectionFamily from "./components/SectionFamily";
import { TextInputProps } from "./components/TextInputProps";
import { appStyles } from "./styles/app";

export default function App() {
  const containerStyle = {...appStyles.container,marginTop:20}
  return (
  <View style={containerStyle}>

  {/* <FamilyApp/> */}
  {/* <SectionFamily/> */}
  <TextInputProps/>
  <TextInputProps/>
  </View>
  )
}
