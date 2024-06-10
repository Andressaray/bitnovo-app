import {StyleSheet} from 'react-native';
import {colors, fonts} from '@ui/theme/index';

const styles = StyleSheet.create({
  btnSend: {
    backgroundColor: colors.light.blue200,
    padding: 8,
    paddingVertical: 6,
    borderRadius: 5,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSend: {
    fontFamily: fonts.bold,
    color: colors.light.white,
    fontSize: 13,
  },
});

export default styles;
