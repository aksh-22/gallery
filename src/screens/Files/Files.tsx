import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {ReadDirItem} from 'react-native-fs';
import useGetDirectories from 'src/hooks/useGetDirectories';
import {ComponentProps} from 'src/routes/types/navigation';
import filesStyle from './files.style';

const Files = ({navigation, route}: ComponentProps) => {
  const params: Readonly<ReadDirItem> = route.params;

  const {directories, files} = useGetDirectories({path: params?.path});

  const onPress = (data: ReadDirItem) => {
    navigation.push('Files', data);
  };

  return (
    <ScrollView contentContainerStyle={filesStyle.container}>
      {[...directories, ...files].map((el, index) => (
        <TouchableOpacity
          onPress={() => onPress(el)}
          style={filesStyle.item}
          key={index}>
          <Text style={filesStyle.text} numberOfLines={1}>
            {el.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Files;
