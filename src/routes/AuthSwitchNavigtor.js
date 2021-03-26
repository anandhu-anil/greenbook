import React from'react';
import {createStackNavigator} from '@react-navigation/stack';
//import SplashScreen from '../screens/SplashScreen.js';
import Verification from '../screens/VerificationScreen.js';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const AuthSwitchNavigator = (props) => {
    return (
      <>
        <Stack.Navigator initialRouteName="Verification">
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </>
        
        
    );
};

export default AuthSwitchNavigator;