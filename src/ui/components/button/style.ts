import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 15,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: colors.light.blue50,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.light.blue100,
  },
  textDark: {
    color: colors.dark.white,
  },
  textLight: {
    color: colors.light.blue,
  },
});

export default styles;
