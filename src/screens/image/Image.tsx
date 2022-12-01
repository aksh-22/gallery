import React from 'react';
import {View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ComponentProps} from 'src/routes/types/navigation';
import imageStyle from './image.style';

const ImageComponent = ({route, navigation}: ComponentProps) => {
  console.log('route', route.params);
  const {photos, index, goToIndex} = route.params;

  const images = photos.map(el => ({url: el.node.image.uri}));
  // [
  //   {
  //     // Simplest usage.
  //     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

  //     // width: number
  //     // height: number
  //     // Optional, if you know the image size, you can set the optimization performance

  //     // You can pass props to <Image />.
  //     props: {
  //       // headers: ...
  //     },
  //   },
  //   {
  //     url: '',
  //     props: {
  //       // Or you can set source directory.
  //       source: require('../background.png'),
  //     },
  //   },
  // ];

  return (
    <View style={imageStyle.container}>
      <ImageViewer
        enableSwipeDown
        onSwipeDown={() => navigation.goBack()}
        index={index}
        imageUrls={images}
        onChange={i => goToIndex(i)}
      />
      {/* <Swiper
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
      </Swiper> */}
    </View>
  );
};

export default ImageComponent;
