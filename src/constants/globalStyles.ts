import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  borderBottomRadius: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  borderTopRadius: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  shadow: {
    shadowColor: colors.defaultBlack,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 7,
  },
  crossIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 30,
    width: 30,
    zIndex: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  mt_5: {
    marginTop: 5,
  },
  mb_5: {
    marginBottom: 5,
  },
  mt_10: {
    marginTop: 10,
  },
  mt_20: {
    marginTop: 20,
  },
  mt_40: {
    marginTop: 40,
  },
  mr_20: {
    marginRight: 20,
  },
  mr_30: {
    marginRight: 20,
  },
  mr_40: {
    marginRight: 20,
  },

  centerAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalView: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  mainCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  row_spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
