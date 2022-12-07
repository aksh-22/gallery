import {useEffect, useState} from 'react';
import {ReadDirItem} from 'react-native-fs';

var RNFS = require('react-native-fs');

type Props = {
  path?: any;
};

const useGetDirectories = ({
  path = RNFS.ExternalStorageDirectoryPath,
}: Props = {}) => {
  const [directories, setDirectories] = useState<Array<ReadDirItem>>([]);
  const [files, setFiles] = useState([]);

  const getDirectory = async () => {
    await RNFS.readDir(path)
      .then(result => {
        // console.log('RESULT', JSON.stringify(result, null, 2));
        const tempDirectories = [];
        const tempFiles = [];
        result.forEach((element: ReadDirItem) => {
          if (element.isDirectory()) {
            tempDirectories.push(element);
          } else if (element.isFile()) {
            tempFiles.push(element);
          }
        });
        setDirectories(tempDirectories);
        setFiles(tempFiles);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };

  useEffect(() => {
    getDirectory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {directories, files};
};

export default useGetDirectories;
