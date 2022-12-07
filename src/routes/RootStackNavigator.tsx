import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Album from 'src/screens/Albums/Album';
import Directory from 'src/screens/directory/Directory';
import Files from 'src/screens/Files/Files';
import Home from 'src/screens/Home/Home';
import ImageComponent from 'src/screens/image/Image';

const RootStack = createNativeStackNavigator<any>();

type Props = {};

const RootStackNavigator = ({}: Props) => {
  const {Navigator, Screen} = RootStack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Files" component={Files} />
      <Screen name="Home" component={Home} />
      <Screen name="Album" component={Album} />
      <Screen name="Image" component={ImageComponent} />
      <Screen name="Directory" component={Directory} />
      {/* <Screen name="Bottom" component={BottomStackNavigator} /> */}
    </Navigator>
  );
};

export default RootStackNavigator;
