import {Text, useColorScheme} from 'react-native';
import {Props} from './type';
import styles from './style';

const TitleHeader = ({title}: Props) => {
  const colorScheme = useColorScheme();
  const colorTheme =
    colorScheme === 'dark' ? styles.darkTitle : styles.lightTitle;
  return (
    <Text testID="titleHeader" style={[styles.title, colorTheme]}>
      {title}
    </Text>
  );
};

export default TitleHeader;
