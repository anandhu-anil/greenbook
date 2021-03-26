import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from '../screens/SplashScreen';
import AuthSwitchNavigator from './AuthSwitchNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

const RootSwitchNavigator = () => {
    const { login } = useContext(AuthContext);
    // console.warn(login)

    //   if (authStateLoading) {
    //     return (
    //       <Stack.Navigator initialRouteName="SplashScreen">
    //         <Stack.Screen
    //           name="SplashScreen"
    //           component={SplashScreen}
    //           options={{ headerShown: false }}
    //         />
    //       </Stack.Navigator>
    //     );
    //   } else {
    return login ? <HomeStackNavigator /> : <AuthSwitchNavigator />;
    //   }
};

export default RootSwitchNavigator;


