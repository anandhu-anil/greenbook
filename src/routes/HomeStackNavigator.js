import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Verification from '../screens/VerificationScreen';
import OtpScreen from '../screens/OtpScreen.js';
import Login from '../screens/Login.js';


const Stack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login">
            <Stack.Screen
                name="Login"
                options={{ title: 'Login' }}
                component={Login}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
