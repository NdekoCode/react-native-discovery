import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{alignContent:'center',justifyContent:'center',minHeight:80,backgroundColor:'#ee4334',}}>
      <Text style={{fontSize:24,color:'#fff',textAlign:'center',fontWeight:'500',textTransform:'capitalize'}}>My App list</Text>
    </View>
  )
}

export default Header