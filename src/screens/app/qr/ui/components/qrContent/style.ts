import {colors, fonts} from '@ui/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  qrContent: {
    borderRadius: 7,
    backgroundColor: colors.light.white,
    borderWidth: 1,
    padding: 30,
    borderColor: colors.light.white,
  },
  amount: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: fonts.bold,
    color: colors.dark.white,
    marginTop: 20,
  },
  desc: {
    marginTop: 10,
    fontSize: 14,
    color: colors.light.white,
    fontFamily: fonts.regular,
  },
});

export default styles;
