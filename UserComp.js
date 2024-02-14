import { useState } from "react"
import { Button, Text, View } from "react-native"

const UserComp = ()=>{
    const [user,setUser] = useState({
        name:'Arick',
        age:25
    })
    const handleChangeUser = ()=>{
        setUser(d=>({
            ...d,
            name:"Cedric",
            age:26,
        }))
    }
    const getName = (user)=> `Je m'appel ${user.name} et j'ai ${user.age}`;
    return <View>
        <Text>{getName(user)}</Text>
        <Button onPress={handleChangeUser} title="Click-me"/>
    </View>
}

export default UserComp;