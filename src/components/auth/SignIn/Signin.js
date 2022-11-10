import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react"
const { width } = Dimensions.get('window');


export default SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (<>
    <Image
      resizeMode={'cover'}
      style={{ width: width, height: 180 }}
      source={require('../../../utilities/images/onboarding2.jpg')} />
    <Text style={styles.SignInText}>Sign In</Text>
    {/* <TextInput
        style={styles.inputOuter}
        onChangeText={setEmail}
        value={email}
        placeholderTextColor="black" 
        textColor = "black"
        placeholder="Email"
      /> */}
    <TextInput
      style={styles.inputOuter}
      onChangeText={setPassword}
      value={password}
      placeholderTextColor="black"
      textColor="black"
      placeholder="Password"
    />
    <TouchableOpacity style={styles.signInButton} onPress={() => { }}>
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>
    {/* <View style={{ display: "flex", flexDirection: "row", marginHorizontal: 70, marginVertical: 20 }}>
      <Text style={{ color: "black" }}>Don't have an account?</Text><TouchableOpacity onPress={() => {
        navigation.push("SignUp")
      }}>
        <Text style={{ color: "#5800FF", marginLeft: 5 }}>Sign Up</Text>
      </TouchableOpacity></View> */}
  </>
  )
}


const styles = StyleSheet.create({
  SignInText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
    fontWeight: "700"
  },
  inputOuter: {
    color: "black",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  signInText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  signInButton: {
    width: 370,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: "#5800FF",
    marginTop: 20,
    marginBottom: 10
  },
})