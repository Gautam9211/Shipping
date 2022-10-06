import React,{View,Text,TouchableOpacity} from "react-native";
import {useEffect} from "react";
import {styles} from "./styles"
import SignUp from "../SignUp/SignUp"


export default SignUpButton = ({navigation})=>{
    return (
     <View>
        <TouchableOpacity style = {styles.signupButton} onPress={()=>{
            navigation.push("SignUp")
        }}>
             <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
     </View>
    )
}