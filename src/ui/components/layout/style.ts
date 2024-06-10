import {StyleSheet} from 'react-native';

import {colors} from '../../theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  darkContainer: {
    backgroundColor: colors.dark.blue,
  },
  lightContainer: {
    backgroundColor: colors.light.white,
  },
  darkContent: {
    backgroundColor: colors.dark.blue,
  },
  lightContent: {
    backgroundColor: colors.light.white,
  },
});

export default styles;
