import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {Props} from './type';
import styles from './style';

const Button = ({
  title,
  onPress,
  styleBtn = {},
  styleText = {},
  isLoading = false,
  IconRight = null,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={isLoading ? () => {} : onPress}
      style={[styles.btn, styleBtn]}
      activeOpacity={0.7}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.text, styleText]}>{title}</Text>
      )}
      {IconRight && <IconRight style={{width: 20, height: 20}} />}
    </TouchableOpacity>
  );
};
export default Button;
