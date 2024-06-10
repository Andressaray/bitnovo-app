import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  input: {
    paddingLeft: 35,
    height: 50,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.light.gray,
    borderWidth: 1,
    marginBottom: 10,
    fontFamily: fonts.regular,
    fontWeight: '400',
  },

  textDark: {
    color: colors.dark.white,
  },
  textLight: {
    color: colors.light.black,
  },
  icon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 15,
    left: 10,
  },
});

export default styles;
