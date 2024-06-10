import {TextInput, useColorScheme} from 'react-native';
import {colors} from '@theme';
import styles from './style';
import {Props} from './type';

const InputDescription = ({
  description,
  setDescription,
  placeholder,
  handleFocused,
  isFocused,
}: Props) => {
  const colorSchema = useColorScheme();
  const inputColor =
    colorSchema === 'dark' ? styles.darkInput : styles.lightInput;
  const colorFocus =
    colorSchema === 'dark'
      ? isFocused
        ? colors.dark.gray100
        : colors.dark.white
      : isFocused
      ? colors.light.blue200
      : colors.light.gray;
  return (
    <TextInput
      style={[
        styles.input,
        inputColor,
        {
          borderColor: colorFocus,
        },
      ]}
      onFocus={() => handleFocused(true)}
      onBlur={() => handleFocused(false)}
      multiline
      maxLength={140}
      verticalAlign="top"
      numberOfLines={4}
      placeholderTextColor={colors.light.gray100}
      placeholder={placeholder}
      onChangeText={text => setDescription(text)}
      value={description}
    />
  );
};

export default InputDescription;
