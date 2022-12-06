import React from 'react';
import {View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ComponentProps} from 'src/routes/types/navigation';
import imageStyle from './image.style';

const ImageComponent = ({route, navigation}: ComponentProps) => {
  console.log('route', route.params);
  const {photos, index, goToIndex} = route.params;

  const images = photos.map(el => ({url: el.node.image.uri}));

  return (
    <View style={imageStyle.container}>
      <ImageViewer
        enableSwipeDown
        onSwipeDown={() => navigation.goBack()}
        index={index}
        imageUrls={images}
        onChange={i => goToIndex(i)}
      />
    </View>
  );
};

export default ImageComponent;
