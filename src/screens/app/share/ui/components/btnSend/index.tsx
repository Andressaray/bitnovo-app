import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {Props} from './type';

const BtnSend = ({handlePress, isDisabled}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => !isDisabled && handlePress()}
      activeOpacity={0.7}
      style={styles.btnSend}>
      <Text style={styles.textSend}>Enviar</Text>
    </TouchableOpacity>
  );
};

export default BtnSend;
