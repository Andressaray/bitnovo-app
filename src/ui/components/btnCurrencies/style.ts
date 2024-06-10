import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 6,
    height: 25,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',

    width: 65,
    flexDirection: 'row',
  },
  bgDark: {
    backgroundColor: colors.dark.blue100,
  },
  btnLight: {
    backgroundColor: colors.light.gray200,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.light.blue,
    fontFamily: fonts.bold,
    fontWeight: '600',
  },
});

export default styles;
