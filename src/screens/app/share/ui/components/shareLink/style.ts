import {StyleSheet} from 'react-native';
import {colors, fonts} from '@ui/theme/index';

const styles = StyleSheet.create({
  btn: {
    width: '78%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.light.gray200,
    flexDirection: 'row',
    gap: 15,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnQr: {
    width: 60,
    borderRadius: 6,
    backgroundColor: colors.light.blue200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.light.blue,
  },
  textDark: {
    color: colors.dark.white,
  },
  textLight: {
    color: colors.light.blue,
  },
});

export default styles;
