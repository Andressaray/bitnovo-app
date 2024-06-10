import {Text} from 'react-native';
import {Props} from './type';
import styles from './style';

const CountCharacters = ({value, limit}: Props) => {
  return (
    <Text style={styles.text}>
      {value.length}/{limit} caracteres
    </Text>
  );
};

export default CountCharacters;
