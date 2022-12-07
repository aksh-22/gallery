import {View, Text} from 'react-native';
import React from 'react';
import useGetDirectories from 'src/hooks/useGetDirectories';
import {ComponentProps} from 'src/routes/types/navigation';
import {directoryType} from 'typings/directory-type';
import {ReadDirItem} from 'react-native-fs';

const Directory = ({route}: ComponentProps) => {
  console.log('route', route);

  const params: Readonly<ReadDirItem> = route.params;

  const {directories} = useGetDirectories({path: params.path});

  console.log('directories', directories);

  return (
    <View>
      <Text style={{color: '#000'}}>{params.name}</Text>
    </View>
  );
};

export default Directory;
