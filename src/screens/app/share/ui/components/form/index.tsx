import React, {useState} from 'react';
import {
  View,
  Share as ShareRN,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import InfoPayment from '../infoPayment';
import ModalShare from '../modalShare';
import ShareApps from '../shareApps';
import ShareEmail from '../shareEmail';
import ShareLink from '../shareLink';
import ShareWhatsApp from '../shareWhatsapp';
import {Button} from '@ui/components';
import useOrderStore from '@ui/store/order';
import usePaymentStore from '@ui/store/payment';
import useCurrencyStore from '@ui/store/currency';
import toastMessage from '@ui/utils/toast';
import IWalletSave from '@icons/wallet-add.svg';
import useCountryCode from '@ui/store/countryCode';
import styles from './styles';
import {StackAppScreenRouteProp} from '../../../../../../navigation/type';

const Form = () => {
  const navigation = useNavigation<StackAppScreenRouteProp>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<number>(0);
  const {order} = useOrderStore();

  const {payment} = usePaymentStore();
  const {currency} = useCurrencyStore();
  const {code} = useCountryCode();

  const message = `Bitnovo\nTienes un pago de Bitnovo pendiente de confirmar por el valor de: ${currency.prefix}  ${payment?.amount} ${currency.suffix}\n\n ${order?.web_url}`;

  const handleShortLink = () => {
    const link = order?.web_url.replaceAll('https://', ' ');
    return link ?? '';
  };

  const handleIsFocused = (id: number) => {
    return isFocused === id;
  };

  const handleFocus = (id: number) => {
    if (isFocused === id) {
      setIsFocused(0);
    } else {
      setIsFocused(id);
    }
  };

  const handleWhatsapp = async (phone: string) => {
    await Linking.openURL(`whatsapp://send?text=${message}&phone=${phone}`);
  };

  const handleNavigateCountries = () => {
    navigation.navigate('countries');
  };

  const handleSendApp = async () => {
    await ShareRN.share({
      url: order?.web_url ?? '',
      title: 'Bitnovo',
      message,
    });
    setIsModalVisible(!isModalVisible);
  };

  const handleSendEmail = async (email: string) => {
    Linking.openURL(`mailto:${email}?subject=Bitnovo&body=${message}`);
  };

  const handleNavigateQr = () => {
    navigation.navigate('qr');
  };

  const handleNavigate = () => {
    navigation.navigate('payments');
  };

  const handleCopyOrder = () => {
    Clipboard.setString(order?.web_url ?? '');
    setIsFocused(0);
    toastMessage({
      type: 'info',
      text1: 'Copiado',
      text2: 'Enlace copiado al portapapeles',
    });
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentForm}
      enableOnAndroid={true}
      style={styles.contentView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View style={styles.content}>
            <InfoPayment
              amount={payment?.amount ?? 0}
              prefix={currency.prefix}
              suffix={currency.suffix}
            />
            <View style={styles.content}>
              <ShareLink
                onQrPress={() => handleNavigateQr()}
                isFocused={handleIsFocused(1)}
                link={handleShortLink()}
                onPress={handleCopyOrder}
              />
              <ShareEmail
                handlePress={handleSendEmail}
                handleFocus={() => handleFocus(2)}
                isFocused={handleIsFocused(2)}
              />
              <ShareWhatsApp
                code={code}
                handleCode={handleNavigateCountries}
                handleSend={handleWhatsapp}
                handleFocus={() => handleFocus(3)}
                isFocused={handleIsFocused(3)}
              />
              <ShareApps
                handleSend={handleSendApp}
                handleFocus={() => handleFocus(4)}
                isFocused={handleIsFocused(4)}
              />
            </View>
          </View>
          <ModalShare
            option={isFocused as 1 | 2 | 3 | 4}
            isVisible={isModalVisible}
            onChange={() => {
              setIsModalVisible(!isModalVisible);
              setIsFocused(0);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <Button
        title="Nueva solicitud"
        styleText={styles.text}
        onPress={handleNavigate}
        styleBtn={styles.btn}
        IconRight={() => <IWalletSave width={20} height={25} />}
      />
    </KeyboardAwareScrollView>
  );
};

export default Form;
