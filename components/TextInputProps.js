import { Button, TextInput, View ,Keyboard} from "react-native"
import { appStyles } from "../styles/app"

export const TextInputProps = ()=>{
    const onHandlePress = ()=>{
        Keyboard.dismiss();
    }
    return <View style={appStyles.inputContainer}>
        <TextInput style={appStyles.textInput} placeholder="Enter your new product" secureTextEntry={true} onSubmitEditing={Keyboard.dismiss}/>
        <Button title="Valider" onPress={onHandlePress}/>
    </View>
}