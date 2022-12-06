import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import useGetImages from 'src/hooks/useGetImages';
import homeStyle from './home.style';

type Props = {
  onPress: () => void;
  el: any;
};

const Folder = ({onPress, el}: Props) => {
  const {photos} = useGetImages({title: el.title, first: 1});

  return (
    <TouchableOpacity onPress={onPress} style={homeStyle.item}>
      <Image
        source={{uri: photos[0]?.node.image.uri}}
        style={homeStyle.folderImage}
      />
      <Text numberOfLines={1} style={homeStyle.text}>
        {el.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Folder;
