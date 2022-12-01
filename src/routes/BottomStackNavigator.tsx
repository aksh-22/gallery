import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/screens/Home/Home';

const Tab = createBottomTabNavigator();

type Props = {};

const BottomStackNavigator = ({}: Props) => {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default BottomStackNavigator;
