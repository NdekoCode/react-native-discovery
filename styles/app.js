import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch',
    padding:20,
  },
  buttonText:{
    padding:10,
    minHeight:50,
    justifyContent:'center',
    backgroundColor:'blue',
    color:'#fff',
    borderRadius:10,
    text:{
      color:'#fff',
      fontSize:15
    }
  }
  ,
  modalContainer: {
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    padding:40,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalStyle:{
    maxHeight:550,
    width:'100%',
    margin:20,
    backgroundColor:'#3333'
  }
,
  userItem:{
    paddingVertical:12,
    margin:10,
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
  },sectionText:{
    textAlign:'center'
  },
  inputContainer:{
    marginBottom:15,
  },
  textInput:{
    borderColor:'#ccc',
    borderWidth:0.5,
    padding:10,
    fontSize:18,
    color:'#aaa',
    flexGrow:1,
    marginBottom:10
  }

});
