import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily:'Inter',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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