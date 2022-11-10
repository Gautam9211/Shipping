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
import OtpScreen from './src/components/auth/OtpScreen/OtpScreen';
import OtpVerification from './src/components/auth/OtpVerification/OtpVerification';
const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name='OtpScreen' component={OtpScreen} />
        <AuthStack.Screen name='OtpVerification' component={OtpVerification} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="Usertype" component={Usertype} />
      </AuthStack.Navigator>

    </NavigationContainer>
  );
}