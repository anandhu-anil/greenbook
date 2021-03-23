import React from 'react';
import {View} from 'react-native';
import AuthSwitchNavigator from './src/routes/AuthSwitchNavigtor';
import {NavigationContainer} from '@react-navigation/native';

const App = (props) => {
  return (
    <NavigationContainer>
      <AuthSwitchNavigator />
    </NavigationContainer>
  );
};

export default App;
