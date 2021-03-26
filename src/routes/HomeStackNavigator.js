import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Verification from '../screens/VerificationScreen';


const Stack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Verification">
            <Stack.Screen
                name="Verification"
                options={{ title: 'Verification' }}
                component={Verification}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
