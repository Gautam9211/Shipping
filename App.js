/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */  

import React from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from "./src/components/Onboarding/Onboarding"
import SignUp from './src/components/auth/SignUp/SignUp';
import Usertype from './src/components/auth/UserType/Usertype';
import SignIn from './src/components/auth/SignIn/Signin';
const AuthStack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <AuthStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <AuthStack.Screen name= "Onboarding" component = {Onboarding} />
    <AuthStack.Screen name= "SignUp" component = {SignUp} />
    <AuthStack.Screen name= "SignIn" component = {SignIn} />
    <AuthStack.Screen name= "Usertype" component = {Usertype} />
  </AuthStack.Navigator>

</NavigationContainer>
  );
}