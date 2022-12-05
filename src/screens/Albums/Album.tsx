import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ComponentProps} from 'src/routes/types/navigation';
import AlbumStyle from './Album.style';
import AlbumBox from './AlbumBox';

const Album = ({route, navigation}: ComponentProps) => {
  const [photos, setPhotos] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);

  const goToIndex = index => {
    console.log('index', index);
    flatListRef.current.scrollToIndex({index: index > 3 ? index / 3 : 1});
  };

  const flatListRef = useRef(null);

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
  }, [route.params.title]);

  const renderItem = ({item, index}) => {
    return (
      <AlbumBox
        onPress={() =>
          navigation.navigate('Image', {
            index,
            photos,
            goToIndex,
          })
        }
        uri={item.node.image.uri}
      />
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
        ref={flatListRef}
        onEndReached={onEndReached}
        numColumns={3}
        data={photos}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Album;
