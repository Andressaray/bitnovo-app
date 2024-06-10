import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light.gray200,
    padding: 15,
    gap: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 120,
    height: 40,
  },
  textRequestMoney: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.light.gray100,
  },
  textMoney: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: colors.light.blue,
  },
  textShare: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.light.gray100,
  },
  contentInfo: {
    gap: 2,
  },
});

export default styles;
