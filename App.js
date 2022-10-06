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
import SignUp from './src/components/SignUp/SignUp';

const AuthStack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <AuthStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <AuthStack.Screen name= "Onboarding" component = {Onboarding} />
    <AuthStack.Screen name= "SignUp" component = {SignUp} />
  </AuthStack.Navigator>

</NavigationContainer>
  );
}