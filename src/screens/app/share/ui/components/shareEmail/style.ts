import {StyleSheet} from 'react-native';
import {colors, fonts} from '@ui/theme/index';

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.light.gray200,
    flexDirection: 'row',
    gap: 15,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.light.blue,
    height: 60,
    width: '65%',
  },
  textDark: {
    color: colors.dark.white,
  },
  textLight: {
    color: colors.light.blue,
  },
  btnPressed: {
    borderColor: colors.light.blue,
  },
  btnPressedDark: {
    borderColor: colors.light.blue100,
  },
});

export default styles;
