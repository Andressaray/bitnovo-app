import {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import IArrowDown from '@icons/arrow-down.svg';
import IWhatsApp from '@icons/whatsapp.svg';
import styles from './style';
import {Props} from './type';
import BtnSend from '../btnSend';

const ButtonWhatsapp = ({
  code,
  handleFocus,
  isFocused,
  handleSend,
  handleCode,
}: Props) => {
  const [phone, setPhone] = useState<string>('');
  const colorSchema = useColorScheme();
  const btnStyle = isFocused
    ? colorSchema === 'dark'
      ? styles.btnPressedDark
      : styles.btnPressed
    : {};
  const textColor = colorSchema === 'dark' ? styles.textDark : styles.textLight;

  const handlePress = () => {
    if (phone.length < 10) {
      return;
    }
    handleSend(phone);
  };
  const formatNumber = (number: string) => {
    return number
      .replace(/\D+/g, '')
      .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  const handleIsVisible = () => {
    return phone.length === 10;
  };

  return (
    <TouchableOpacity
      style={[styles.btn, btnStyle]}
      activeOpacity={0.7}
      onPress={() => {
        handleFocus();
      }}>
      <IWhatsApp style={styles.icon} />
      {isFocused ? (
        <View style={styles.container}>
          <View style={styles.contentNumbers}>
            <TouchableOpacity
              style={styles.btnPrefix}
              activeOpacity={0.7}
              onPress={handleCode}>
              <Text style={[styles.textCode, textColor]}>{code}</Text>
              <IArrowDown />
            </TouchableOpacity>
            <TextInput
              maxLength={14}
              autoFocus={true}
              style={[styles.textCode, textColor]}
              value={formatNumber(phone)}
              onChangeText={v => setPhone(v)}
              placeholderTextColor={textColor.color}
              keyboardType="numeric"
              placeholder="000-000-0000"
            />
          </View>
          {handleIsVisible() && (
            <BtnSend
              handlePress={handlePress}
              isDisabled={phone.length < 10 ? true : false}
            />
          )}
        </View>
      ) : (
        <Text style={[styles.text, textColor]}>
          Enviar a numero de WhatsApp
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWhatsapp;
