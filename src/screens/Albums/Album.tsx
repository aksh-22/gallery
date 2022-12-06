import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';
import useGetImages from 'src/hooks/useGetImages';
import {ComponentProps} from 'src/routes/types/navigation';
import AlbumStyle from './Album.style';
import AlbumBox from './AlbumBox';

const Album = ({route, navigation}: ComponentProps) => {
  const {onEndReached, photos} = useGetImages(route.params.title);

  const goToIndex = index => {
    if (index !== null && !isNaN(index) && index < photos.length) {
      flatListRef.current.scrollToIndex({index: index > 3 ? index / 3 : 1});
    }
  };

  const flatListRef = useRef(null);

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
