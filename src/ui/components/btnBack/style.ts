import {StyleSheet} from 'react-native';

import {colors} from '../../theme';
const styles = StyleSheet.create({
  btn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBtn: {
    backgroundColor: colors.light.gray200,
  },
  icon: {
    width: 20,
    height: 20,
  },
  darkBtn: {
    backgroundColor: colors.light.blue50,
  },
  lightIcon: {
    color: colors.light.blue,
  },
  darkIcon: {
    color: colors.light.blue,
  },
});

export default styles;
