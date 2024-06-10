import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import IArrowDown from '@icons/arrow-down.svg';
import {Props} from './type';
import styles from './style';

const BtnCurrencies = ({currency, handlePress}: Props) => {
  const colorSchema = useColorScheme();
  const bgColor = colorSchema === 'dark' ? styles.bgDark : styles.btnLight;
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.btn, bgColor]}
      activeOpacity={0.7}>
      <Text style={styles.text}>{currency ?? ''}</Text>
      <IArrowDown />
    </TouchableOpacity>
  );
};

export default BtnCurrencies;
