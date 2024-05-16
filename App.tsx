import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigator/AppNavigator';

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
