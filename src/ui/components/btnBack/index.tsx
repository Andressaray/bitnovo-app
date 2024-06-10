import {TouchableOpacity, useColorScheme} from 'react-native';
import IArrowBack from '@icons/arrow-left.svg';
import {Props} from './type';
import styles from './style';

const BtnBack = ({handleBack}: Props) => {
  const colorScheme = useColorScheme();
  const colorThemeBtn =
    colorScheme === 'dark' ? styles.darkBtn : styles.lightBtn;
  return (
    <TouchableOpacity
      testID="btnBack"
      style={[styles.btn, colorThemeBtn]}
      activeOpacity={0.7}
      onPress={handleBack}>
      <IArrowBack style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BtnBack;
