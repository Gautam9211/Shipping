import React,{View,Text,TouchableOpacity,Image,TextInput,ScrollView,Dimensions} from "react-native";
import {useState} from "react";
import { styles } from "./styles";
const {width} = Dimensions.get('window');

export default SignUp = ({navigation})=>{
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [companyName,setCompanyName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return (
        <ScrollView>
          <View style={{backgroundColor:"white"}}>
            <Image 
               resizeMode={'cover'}
               style={{ width:width, height: 300 }}
               source ={require('../../utilities/images/onboarding1.jpg')} />
     <View style = {{marginTop:10,borderTopLeftRadius:20,borderTopRightRadius:20,border:1}}>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Text style={styles.signUpText}>Sign Up Using</Text>
        <TouchableOpacity style={{marginVertical:10}}>
          <Image 
               resizeMode={'contain'}
               style={{ width:70, height: 70 }}
               source ={require('../../utilities/images/google-icon.png')} />
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 0.7, height: 1, backgroundColor: 'grey'}} />
  <View>
    <Text style={{width: 60, textAlign: 'center',fontSize:15,color:"black"}}>OR</Text>
  </View>
  <View style={{flex: 0.7, height: 1, backgroundColor: 'grey'}} />
</View>

<View>
        {/* signup form */}
     </View>
  <View style={{flexDirection:"row"}}>
     <TextInput
        style={styles.inputInner}
        onChangeText={setFirstName}
        value={firstName}
        placeholderTextColor="black" 
        textColor = "black"
        placeholder="First Name"
      />
     <TextInput
        style={styles.inputInner}
        onChangeText={setLastName}
        value={lastName}
        placeholderTextColor="black" 
        placeholder = "Last Name"
      />
      </View>
      <TextInput
        style={styles.inputOuter}
        onChangeText={setCompanyName}
        value={companyName}
        placeholderTextColor="black" 
        textColor = "black"
        placeholder="Company Name"
      />
       <TextInput
        style={styles.inputOuter}
        onChangeText={setEmail}
        value={email}
        placeholderTextColor="black" 
        textColor = "black"
        placeholder="Email"
      />
       <TextInput
        style={styles.inputOuter}
        onChangeText={setPassword}
        value={password}
        placeholderTextColor="black" 
        textColor = "black"
        placeholder="Password"
      />
  </View>
  <Text style={{color:"black",textAlign:"center",fontSize:13,fontWeight:"500"}}>By Signing up,you agree to our Privacy Policy  and T&C</Text>
  <TouchableOpacity style = {styles.signupButton} onPress={()=>{
        }}>
             <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        <Text style={{color:"black",textAlign:"center",fontSize:13,fontWeight:"500",marginBottom:10}}>Already have an account? Sign In</Text>
  </ScrollView>
     
    )
}