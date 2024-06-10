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
  btnPressed: {
    borderColor: colors.light.blue,
  },
  icon: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentNumbers: {
    flexDirection: 'row',
    gap: 10,
  },
  textCode: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.light.blue,
  },
  btnPrefix: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  btnPressedDark: {
    borderColor: colors.light.blue100,
  },
});

export default styles;
