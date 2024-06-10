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
import countries from '@ui/utils/json/countries.json';
import {Search} from '@ui/components';
import styles from './style';
import useCountryCode from '@ui/store/countryCode';

const Form = () => {
  const colorSchema = useColorScheme();
  const {code, setCountryCode} = useCountryCode();
  const [search, setSearch] = useState<string>('');
  const codeColor = colorSchema === 'dark' ? styles.codeDark : styles.codeLight;

  const handleIsCountryCode = (numberCode: string) => code === numberCode;
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Search onChangeText={setSearch} placeholder="Buscar" text={search} />
        <FlatList
          data={countries}
          style={styles.contentFlatList}
          keyExtractor={item => item.name}
          bounces={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setCountryCode(item.indicative);
              }}
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
                <View style={styles.contentInfo}>
                  <Text style={[styles.code, codeColor]}>
                    {item.indicative}
                  </Text>
                  <Text
                    style={styles.name}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.name}
                  </Text>
                </View>
              </View>
              {handleIsCountryCode(item.indicative) ? (
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
