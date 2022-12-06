import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.defaultBlack,
  },
  text: {
    color: '#fff',
  },
  item: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.25,
    marginVertical: 10,
    padding: 5,
  },
  contentContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  folderImage: {
    width: SCREEN_WIDTH * 0.25,
    height: 100,
  },
});
