import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import AlbumStyle from './Album.style';

type Props = {
  onPress: () => void;
  uri: string;
};

const AlbumBox = ({onPress, uri}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={AlbumStyle.image} source={{uri: uri}} />
    </TouchableOpacity>
  );
};

export default AlbumBox;
