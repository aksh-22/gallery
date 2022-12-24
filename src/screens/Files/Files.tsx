import React from 'react';
import {ScrollView} from 'react-native';
import {ReadDirItem} from 'react-native-fs';
import Folder from 'src/components/folder/Folder';
import Loading from 'src/components/Loading/Loading';
import useGetDirectories from 'src/hooks/useGetDirectories';
import {ComponentProps} from 'src/routes/types/navigation';
import filesStyle from './files.style';

const Files = ({navigation, route}: ComponentProps) => {
  const params: Readonly<ReadDirItem> = route.params;

  const {directories, files, isLoading} = useGetDirectories({
    path: params?.path,
  });

  const onPress = (data: ReadDirItem) => {
    navigation.push('Files', data);
  };

  return (
    <ScrollView contentContainerStyle={filesStyle.container}>
      {isLoading ? (
        <Loading />
      ) : (
        [...directories, ...files].map((el, index) => (
          <Folder onPress={() => onPress(el)} key={index} el={el} />
        ))
      )}
    </ScrollView>
  );
};

export default Files;
