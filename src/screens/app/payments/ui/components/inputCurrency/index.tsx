import CurrencyInput from 'react-native-currency-input';
import {colors} from '@theme';
import styles from './style';
import {Props} from './type';

const InputCurrency = ({
  value,
  handleChangeValue,
  placeholder,
  suffix,
  prefix,
}: Props) => {
  const colorStyle = value === 0 ? colors.light.gray : colors.light.blue200;
  return (
    <CurrencyInput
      value={value}
      onChangeValue={v => {
        handleChangeValue(v ?? 0);
      }}
      signPosition="beforePrefix"
      delimiter="."
      placeholder={placeholder}
      maxLength={14}
      cursorColor={colorStyle}
      suffix={suffix}
      prefix={prefix}
      style={styles.input}
      placeholderTextColor={colors.light.gray}
      separator=","
      precision={2}
    />
  );
};

export default InputCurrency;
