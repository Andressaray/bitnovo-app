import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../theme';
const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontWeight: '600',
    fontSize: 18,
  },
  lightTitle: {
    color: colors.light.blue,
  },
  darkTitle: {
    color: colors.light.blue100,
  },
});

export default styles;
