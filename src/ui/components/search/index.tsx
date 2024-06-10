import {Image, TextInput, View, useColorScheme} from 'react-native';
import ISearch from '@icons/search.svg';
import {colors} from '@theme';
import {Props} from './type';
import styles from './style';

const Search = ({onChangeText, placeholder, text}: Props) => {
  const colorSchema = useColorScheme();
  const textColor = colorSchema === 'dark' ? styles.textDark : styles.textLight;
  return (
    <View>
      <ISearch style={styles.icon} />
      <TextInput
        placeholderTextColor={colors.light.gray}
        value={text}
        onChangeText={onChangeText}
        style={[styles.input, textColor]}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Search;
