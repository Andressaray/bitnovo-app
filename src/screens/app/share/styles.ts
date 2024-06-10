import {StyleSheet} from 'react-native';
import {colors, fonts} from '@ui/theme/index';

const styles = StyleSheet.create({
  container: {
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
});

export default styles;
