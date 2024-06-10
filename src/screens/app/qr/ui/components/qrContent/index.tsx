import {Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ILogo from '@icons/logo.jpeg';
import {colors} from '@ui/theme';
import styles from './style';
import {Props} from './type';

const QrContent = ({url, amount, prefix, suffix}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.qrContent}>
        <QRCode
          backgroundColor={colors.light.white}
          value={url}
          size={300}
          color={colors.dark.blue}
          logo={ILogo}
          logoSize={60}
        />
      </View>
      <Text style={styles.amount}>
        {prefix} {amount} {suffix}
      </Text>
      <Text style={styles.desc}>
        Esta pantalla se actualizará automáticamente.
      </Text>
    </View>
  );
};

export default QrContent;
