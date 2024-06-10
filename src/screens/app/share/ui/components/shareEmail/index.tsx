import {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import IEmail from '@icons/mail.svg';
import styles from './style';
import {Props} from './type';
import BtnSend from '../btnSend';
import {colors} from '@theme';

const ShareEmail = ({isFocused, handleFocus, handlePress}: Props) => {
  const [email, setEmail] = useState<string>('');
  const isValidEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const colorSchema = useColorScheme();
  const btnStyle = isFocused
    ? colorSchema === 'dark'
      ? styles.btnPressedDark
      : styles.btnPressed
    : {};
  const textColor = colorSchema === 'dark' ? styles.textDark : styles.textLight;

  return (
    <View style={[styles.btn, btnStyle]}>
      <IEmail style={styles.icon} />
      <TextInput
        value={email}
        onFocus={handleFocus}
        autoFocus={isFocused}
        style={[styles.text, textColor]}
        placeholder={'Enviar por correo electronico'}
        placeholderTextColor={textColor.color}
        onChangeText={setEmail}
      />
      {isValidEmail() && (
        <BtnSend
          handlePress={() => handlePress(email)}
          isDisabled={isValidEmail()}
        />
      )}
    </View>
  );
};

export default ShareEmail;
