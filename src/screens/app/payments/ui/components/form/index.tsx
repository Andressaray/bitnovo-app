import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Keyboard,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Label} from '@components';
import {colors} from '@theme';
import useCurrencyStore from '@ui/store/currency';
import usePaymentStore from '@ui/store/payment';
import CountCharacters from '../countCharacters';
import InputCurrency from '../inputCurrency';
import InputDescription from '../inputDescription';
import {useCreateOrder} from '../../hooks';
import styles from './style';
import {StackAppScreenRouteProp} from '../../../../../../navigation/type';

const Form = () => {
  const colorSchema = useColorScheme();
  const navigation = useNavigation<StackAppScreenRouteProp>();
  const {currency} = useCurrencyStore();
  const {setPayment} = usePaymentStore();
  const {createOrderMutation} = useCreateOrder();
  const [value, setValue] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');

  const handleStyleBtn = (): ViewStyle => {
    return {
      backgroundColor:
        value === 0
          ? colorSchema === 'dark'
            ? colors.dark.gray100
            : colors.dark.blue50
          : colors.dark.blue200,
    };
  };

  const handleStyleText = (): TextStyle => {
    return {
      color:
        value === 0
          ? colorSchema === 'dark'
            ? colors.dark.gray200
            : colors.dark.blue200
          : colors.light.white,
    };
  };

  const handleNavigate = async () => {
    if (value !== 0) {
      Keyboard.dismiss();
      await createOrderMutation.mutateAsync({
        expected_output_amount: value,
        fiat: currency?.code,
        notes: description,
      });
      setPayment({
        amount: value,
        prefix: currency.prefix,
        suffix: currency.suffix,
      });
      handleReset();
      navigation.navigate('share');
    }
  };

  const handleReset = () => {
    setValue(0);
    setIsFocused(false);
    setDescription('');
  };

  const handleChangeValue = (v: number) => {
    setValue(v);
  };
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      contentContainerStyle={styles.container}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.content}>
          <View style={styles.container}>
            <View style={styles.contentCurrency}>
              <InputCurrency
                handleChangeValue={handleChangeValue}
                placeholder="$ 0.00"
                prefix={currency.prefix}
                suffix={currency.suffix}
                value={value}
              />
            </View>
            <View>
              <Label title="Concepto" />
              <InputDescription
                description={description}
                handleFocused={setIsFocused}
                isFocused={isFocused}
                placeholder="Añade descripción del pago"
                setDescription={setDescription}
              />
              {isFocused && <CountCharacters limit={400} value={description} />}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Button
        isLoading={createOrderMutation.isLoading}
        styleBtn={handleStyleBtn()}
        onPress={handleNavigate}
        title="Continuar"
        styleText={handleStyleText()}
      />
    </KeyboardAwareScrollView>
  );
};

export default Form;
