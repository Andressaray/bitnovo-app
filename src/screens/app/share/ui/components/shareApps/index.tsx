import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import IShared from '@icons/export.svg';
import styles from './style';
import {Props} from './type';

const SharedApps = ({handleFocus, handleSend}: Props) => {
  const colorSchema = useColorScheme();
  const textColor = colorSchema === 'dark' ? styles.textDark : styles.textLight;
  const handlePress = () => {};
  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.7}
      onPress={() => {
        handleFocus();
        handleSend();
      }}>
      <IShared style={styles.icon} />
      <Text style={[styles.text, textColor]}>
        Compartir con otras aplicaciones
      </Text>
    </TouchableOpacity>
  );
};

export default SharedApps;
