import {Text} from 'react-native';
import styles from './style';
import {Props} from './type';

const Label = ({title}: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};
export default Label;
