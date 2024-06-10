import {Text} from 'react-native';
import {Props} from './type';
import styles from './style';

const SymbolCurrency = ({text}: Props) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default SymbolCurrency;
