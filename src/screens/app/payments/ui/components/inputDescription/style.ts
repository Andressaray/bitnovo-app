import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.6,
    borderRadius: 6,
    padding: 15,
    maxHeight: 140,
    fontFamily: fonts.bold,
    lineHeight: 20,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  darkInput: {
    color: colors.dark.white,
  },
  lightInput: {
    color: colors.light.blue,
  },
  focused: {
    borderColor: colors.light.blue,
  },
  notFocused: {
    borderColor: colors.light.gray300,
  },
});

export default styles;
