import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/dimensions';
import globalStyles from 'src/constants/globalStyles';

const size = (SCREEN_WIDTH - 60) * 0.3;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
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
