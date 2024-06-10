import {useState} from 'react';
import {
  Keyboard,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import IQr from '@icons/scan-barcode.svg';
import ILink from '@icons/link.svg';
import styles from './style';
import {Props} from './type';

const ShareLink = ({link, onPress, onQrPress}: Props) => {
  const colorSchema = useColorScheme();
  const textColor = colorSchema === 'dark' ? styles.textDark : styles.textLight;
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={() => {
          onPress();
          Keyboard.dismiss();
        }}>
        <ILink style={styles.icon} />
        <Text style={[styles.text, textColor]} numberOfLines={1}>
          {link}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnQr}
        onPress={onQrPress}>
        <IQr width={40} height={23} />
      </TouchableOpacity>
    </View>
  );
};

export default ShareLink;
