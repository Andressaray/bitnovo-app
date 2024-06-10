import {StyleSheet} from 'react-native';
import {colors, fonts} from '@ui/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -40,
  },
  contentInfo: {
    flex: 1,
  },
  btnDisabled: {
    backgroundColor: colors.light.gray200,
  },
  contentFlatList: {
    marginTop: 20,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  separator: {
    height: 5,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  flag: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 17,
  },
  code: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.light.blue,
  },
  codeDark: {
    color: colors.light.blue50,
  },
  codeLight: {
    color: colors.light.blue,
  },
  name: {
    fontSize: 13,
    marginTop: 3,
    fontFamily: fonts.regular,
    color: colors.light.gray100,
    width: '90%',
  },
});

export default styles;