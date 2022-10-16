import React,{View,Text,TouchableOpacity} from "react-native";
import {styles} from "./styles"

export default SignUpButton = ({navigation})=>{
    return (
     <View>
        <TouchableOpacity style = {styles.signupButton} onPress={()=>{
            navigation.push("Usertype")
        }}>
             <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
     </View>
    )
}