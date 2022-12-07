import {useEffect, useState} from 'react';

var RNFS = require('react-native-fs');

const useGetDirectories = () => {
  const [directories, setDirectories] = useState([]);

  const getDirectory = async () => {
    await RNFS.readDir(RNFS.ExternalStorageDirectoryPath)
      .then(result => {
        console.log('RESULT', JSON.stringify(result, null, 2));
        setDirectories(result);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };

  useEffect(() => {
    getDirectory();
  }, []);

  return {directories};
};

export default useGetDirectories;
