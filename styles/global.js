import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appView:{
    width:'100%',
    display:'flex',
    flexDirection: 'column',
    rowGap:10,
    height: '100%',
  },
    container: {
      flex: 1,
      fontFamily:'Inter',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content:{
      rowGap:10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      marginTop:10
    },
    input:{
      borderStyle:'solid',
      borderColor:'gray',
      height:45,
      padding:10,
      borderRadius:8,
      backgroundColor:'#fff',
      width:'100%',
      borderWidth:1,
    },
    card:{
      borderStyle:'solid',
      borderColor: '#dedede',
      borderWidth:1,
      width:'100%',
      borderRadius: 4,
      padding:12,
      shadowColor:'#dfdfde',
      shadowOffset:5,
      shadowOpacity:0.3,
      shadowRadius:15,
    }
    ,
    text:{
        fontSize:25,
        fontWeight:"700",
    },
    containerShadow:{
      padding:10,
      flex: 1,
      gap:20,
      boxShadow:'0 0 15px #0003',
      borderRadius:10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    }

  });
  export default styles;