import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/dimensions';
import {ComponentProps} from 'src/routes/types/navigation';
// import {FlashList} from '@shopify/flash-list';

const Home = ({navigation}: ComponentProps) => {
  // const [images, setImages] = useState([]);

  const [album, setAlbum] = useState([]);

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  useEffect(() => {
    hasAndroidPermission();
    // CameraRoll.getAlbums({
    //   assetType: 'Photos',
    // })
    //   .then(res => {
    //     setAlbum(res);
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //   });
    CameraRoll.getAlbums({
      assetType: 'All',
    })
      .then(res => {
        console.log('res.edges', JSON.stringify(res, null, 2));
        setAlbum(res);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {album.map((el, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Album', el)}
            key={index}
            style={styles.item}>
            <Text style={styles.text}>{el.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <FlatList numColumns={3} data={album} renderItem={renderItem} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.defaultBlack,
  },
  text: {
    color: '#000',
  },
  item: {
    height: 100,
    backgroundColor: colors.folder,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.3 - 20,
    marginVertical: 10,
    padding: 5,
  },
  contentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
