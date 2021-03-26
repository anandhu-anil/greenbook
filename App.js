import React from 'react';
import {View} from 'react-native';
import AuthSwitchNavigator from './src/routes/AuthSwitchNavigtor';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContextProvider} from './src/context/AuthContext';
import {AppContextProvider} from './src/context/AppContext';


const App = (props) => {
  return (
    <AuthContextProvider>
      <AppContextProvider>
         <NavigationContainer>
          <AuthSwitchNavigator />
         </NavigationContainer>
       </AppContextProvider>
    </AuthContextProvider>
  
  );
};

export default App;
