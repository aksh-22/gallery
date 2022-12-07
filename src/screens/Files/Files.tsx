import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import useGetDirectories from 'src/hooks/useGetDirectories';

type Props = {};

const Files = ({}: Props) => {
  const {directories} = useGetDirectories();

  return (
    <ScrollView>
      {directories.map((el, index) => (
        <View key={index}>
          <Text style={{color: '#000'}}>{el.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Files;
