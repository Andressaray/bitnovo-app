import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  text1: {
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  text2: {
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  textDark: {
    color: colors.dark.blue,
  },
  textLight: {
    color: colors.light.black,
  },
  content: {
    paddingHorizontal: 15,
  },
  contentError: {
    borderLeftColor: colors.light.red,
  },
});

export default styles;
