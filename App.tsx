import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from 'src/routes/RootStackNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
