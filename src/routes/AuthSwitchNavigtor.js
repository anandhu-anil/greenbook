import React from'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen.js';
import Verification from '../screens/VerificationScreen.js';


const stack = createStackNavigator();

const AuthSwitchNavigator = (props) => {
    return (
        <>
     
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
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