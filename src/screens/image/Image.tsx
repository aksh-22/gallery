import React from 'react';
import {Image, View} from 'react-native';
import {ComponentProps} from 'src/routes/types/navigation';
import imageStyle from './image.style';
import Swiper from 'react-native-swiper';

const ImageComponent = ({route}: ComponentProps) => {
  console.log('route', route.params);
  const {photos, index} = route.params;
  return (
    <View style={imageStyle.container}>
      <Swiper
        activeDot={<></>}
        pagingEnabled={false}
        dot={<></>}
        autoplay
        loop={false}
        index={index}>
        {photos.map((el, i) => (
          <Image
            key={i}
            resizeMode="contain"
            style={imageStyle.image}
            source={{uri: el.node.image.uri}}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default ImageComponent;
