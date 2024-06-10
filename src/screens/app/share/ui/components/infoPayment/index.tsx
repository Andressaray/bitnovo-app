import {Text, View} from 'react-native';
import IWallet from '@icons/wallet.svg';
import formatMoney from '@ui/utils/formats/formatMoney';
import styles from './style';
import {Props} from './type';

const InfoPayment = ({amount, prefix, suffix}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <IWallet style={styles.icon} />
        <View style={styles.contentInfo}>
          <Text style={styles.textRequestMoney}>Solicitud de pago</Text>
          <Text style={styles.textMoney}>
            {prefix} {formatMoney(amount)} {suffix}
          </Text>
        </View>
      </View>
      <Text style={styles.textShare}>
        Comparte el enlace de pago con el cliente
      </Text>
    </View>
  );
};

export default InfoPayment;
