import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch',
    padding:20,
  },

  userItem:{
    paddingVertical:12,
    margin:10,
    width:350,
    marginBottom:12,
    backgroundColor:'#10c5fb',
    paddingHorizontal:10,
    justifyContent: "center",
    alignItems: "center",
    flexGrow:1,
  },
  text:{
      color:'#fff',
      fontWeight:'500',
      fontSize:16,
      textTransform:'capitalize'
  }
});
