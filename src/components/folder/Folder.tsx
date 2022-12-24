import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ReadDirItem} from 'react-native-fs';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/dimensions';
import globalStyles from 'src/constants/globalStyles';
var RNFS = require('react-native-fs');

type Props = {
  onPress: (data: any) => void;
  el: ReadDirItem;
};

const Folder = ({onPress, el}: Props) => {
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isFile = el.isFile();

  const getData = async () => {
    setIsLoading(true);
    const base64Data = await RNFS.readFile(el.path, 'base64');
    setImageUri(base64Data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isFile) {
      console.log('el', el.name);
      // 402653184;
      // if (Number(el.size) < 40265318) {
      // if (el.name.match(/.(png|jpe?g|svg)$/)) {
      // setTimeout(() => {
      getData();
      // });
      // getData();
      // }
    }
  }, []);

  return isFile ? (
    <>
      <TouchableOpacity style={styles.item} onPress={getData}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Image
            style={styles.item}
            source={{
              uri: imageUri ? `data:image/jpeg;base64,${imageUri}` : null,
            }}
          />
        )}
      </TouchableOpacity>
    </>
  ) : (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.text} numberOfLines={1}>
        {el.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Folder;

const size = (SCREEN_WIDTH - 60) * 0.3;

const styles = StyleSheet.create({
  item: {
    width: size,
    backgroundColor: colors.folder,
    // margin: 10,
    height: size - 10,
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  itemWrapper: {
    width: size,
    backgroundColor: colors.folder,
    margin: 10,
    height: size,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  text: {
    padding: 10,
  },
});
