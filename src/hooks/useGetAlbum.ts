import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';

const useGetAlbum = () => {
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
    CameraRoll.getAlbums({
      assetType: 'All',
    })
      .then(res => {
        setAlbum(res);
      })
      .catch(err => {});
  }, []);

  return {album};
};

export default useGetAlbum;
