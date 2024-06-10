import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    width: 90,
    height: 90,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.light.blue,
  },
  titleDark: {
    color: colors.dark.white,
  },
  titleLight: {
    color: colors.light.blue,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.light.gray100,
    textAlign: 'center',
  },
});

export default styles;
