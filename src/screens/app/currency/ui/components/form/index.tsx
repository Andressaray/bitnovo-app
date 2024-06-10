import {useState} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  FlatList,
  useColorScheme,
} from 'react-native';
import ICheck from '@icons/check.svg';
import IArrowRight from '@icons/arrow-right.svg';
import useCurrencyStore from '@ui/store/currency';
import currencies from '@ui/utils/json/currencies.json';
import {Search} from '@ui/components';
import styles from './style';

const Form = () => {
  const colorSchema = useColorScheme();
  const {currency, setCurrency} = useCurrencyStore();
  const [search, setSearch] = useState<string>('');
  const nameColor = colorSchema === 'dark' ? styles.nameDark : styles.nameLight;

  const handleIsCurrency = (code: string) => currency?.name === code;
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Search onChangeText={setSearch} placeholder="Buscar" text={search} />
        <FlatList
          data={currencies}
          style={styles.contentFlatList}
          keyExtractor={item => item.name}
          bounces={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setCurrency(item)}
              activeOpacity={0.7}
              style={styles.btn}>
              <View style={styles.content}>
                <Image
                  source={{
                    uri: item.icon,
                  }}
                  resizeMode="cover"
                  style={styles.flag}
                />
                <View>
                  <Text style={[styles.name, nameColor]}>{item.name}</Text>
                  <Text style={styles.code}>{item.code}</Text>
                </View>
              </View>
              {handleIsCurrency(item.name) ? (
                <ICheck style={styles.icon} />
              ) : (
                <IArrowRight style={styles.icon} />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Form;
