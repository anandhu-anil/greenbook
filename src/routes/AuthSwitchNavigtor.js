import React from'react';
import {createStackNavigator} from '@react-navigation/stack';
//import SplashScreen from '../screens/SplashScreen.js';
import Verification from '../screens/VerificationScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import OtpScreen from '../screens/OtpScreen.js';
import Login from '../screens/Login.js';



const Stack = createStackNavigator();

const AuthSwitchNavigator = (props) => {
    return (
      <>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </>
        
        
    );
};

export default AuthSwitchNavigator;