import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Verification from '../screens/VerificationScreen';
import OtpScreen from '../screens/OtpScreen.js';
import Login from '../screens/Login.js';
import Home from '../screens/Home.js';


const Stack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home">
            <Stack.Screen
                name="Home"
                options={{ title: 'Home' }}
                component={Home}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
