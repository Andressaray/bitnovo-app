import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentView: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    gap: 20,
  },
  contentForm: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: colors.light.blue200,
    fontFamily: fonts.bold,
    fontWeight: '500',
  },
  btn: {
    marginTop: 20,
    backgroundColor: colors.light.gray200,
  },
});

export default styles;
