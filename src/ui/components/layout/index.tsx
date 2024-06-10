import {View, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from './type';
import styles from './style';

const Layout = ({children, layoutStyle}: Props) => {
  const colorScheme = useColorScheme();
  const colorThemeContainer =
    colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer;
  return (
    <SafeAreaView style={[styles.container, colorThemeContainer, layoutStyle]}>
      {children}
    </SafeAreaView>
  );
};
export default Layout;
