import { Image, View } from "react-native";
import { TextInputProps } from "./components/TextInputProps";
import { appStyles } from "./styles/app";
import Header from "./components/Header";

export default function App() {
  const containerStyle = { ...appStyles.container, marginTop: 20,flex:1,height:'100%' };
  return (
    <View>
      <Header/>

    <View style={containerStyle}>
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          marginHorizontal: "auto",
          marginBottom: 20,
          alignItems: "center",
          overflow:'hidden',
          borderRadius:40
        }}
      >
        <Image
          source={require("./assets/goku.png")}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </View>
      {/* <FamilyApp/> */}
      {/* <SectionFamily/> */}
      <TextInputProps />
      {/* <TextInputProps/> */}
    </View>
    </View>
  );
}
