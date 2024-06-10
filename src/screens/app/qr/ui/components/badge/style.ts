import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 6,
    backgroundColor: colors.light.gray,
    borderRadius: 7,
    padding: 12,
    marginTop: Platform.OS === 'ios' ? 0 : 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    width: '92%',
    lineHeight: 18,
    fontFamily: fonts.regular,
    color: colors.dark.blue,
    textAlign: 'left',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
export default styles;
