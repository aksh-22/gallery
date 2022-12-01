import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {ComponentProps} from 'src/routes/types/navigation';
import AlbumStyle from './Album.style';

const Album = ({route, navigation}: ComponentProps) => {
  const [photos, setPhotos] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);

  useEffect(() => {
    CameraRoll.getPhotos({
      groupName: route.params.title,
      first: 50,
      groupTypes: 'All',
    }).then(res => {
      console.log('res', JSON.stringify(res.page_info, null, 2));
      setPhotos(res.edges);
      setPageInfo(res.page_info);
    });
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Image', {
              uri: item.node.image.uri,
              index,
              photos,
            })
          }>
          <Image style={AlbumStyle.image} source={{uri: item.node.image.uri}} />
        </TouchableOpacity>
      </>
    );
  };

  const onEndReached = () => {
    pageInfo.has_next_page &&
      CameraRoll.getPhotos({
        groupName: route.params.title,
        first: 50,
        groupTypes: 'All',
        after: pageInfo.end_cursor,
      }).then(res => {
        console.log('res', JSON.stringify(res.page_info, null, 2));
        setPhotos(prev => [...prev, ...res.edges]);
        setPageInfo(res.page_info);
      });
  };

  return (
    <View style={AlbumStyle.container}>
      <FlatList
        onEndReached={onEndReached}
        numColumns={3}
        data={photos}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Album;
