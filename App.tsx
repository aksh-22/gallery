import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from 'src/routes/RootStackNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'JavaScript logs will appear in your browser console',
  'Error: Unable to resolve module ./debugger-ui/debuggerWorker.aca173c4 from /Users/gurupurohit/Aksh/other/Aksh3/gallery/.: ',
  'Remote debugger is in background',
]);

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
