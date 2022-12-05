import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import homeStyle from './home.style';

type Props = {
  onPress: () => void;
  el: any;
};

const Folder = ({onPress, el}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={homeStyle.item}>
      <Text style={homeStyle.text}>{el.title}</Text>
    </TouchableOpacity>
  );
};

export default Folder;
