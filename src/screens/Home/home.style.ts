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
