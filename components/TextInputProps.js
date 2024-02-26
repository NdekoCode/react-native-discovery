import { Button, TextInput, View } from "react-native"
import { appStyles } from "../styles/app"

export const TextInputProps = ()=>{
    return <View style={appStyles.inputContainer}>
        <TextInput style={appStyles.textInput} placeholder="Enter your new product" secureTextEntry={true}/>
        <Button title="Valider"/>
    </View>
}