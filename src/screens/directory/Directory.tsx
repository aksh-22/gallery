import React from 'react';
import {Text, View} from 'react-native';
import {ReadDirItem} from 'react-native-fs';
import {ComponentProps} from 'src/routes/types/navigation';

const Directory = ({route}: ComponentProps) => {
  const params: Readonly<ReadDirItem> = route.params;

  return (
    <View>
      <Text style={{color: '#000'}}>{params.name}</Text>
    </View>
  );
};

export default Directory;
