import {Text, View, useColorScheme} from 'react-native';
import ICheck from '@icons/tick-circle.svg';
import {Button, ModalBottom} from '@ui/components';
import {Props} from './type';
import styles from './styles';
import {colors} from '@theme';

const ModalShare = ({isVisible, onChange, option}: Props) => {
  const options = {
    1: 'WhatsApp',
    2: 'Email',
    3: 'Apps',
    4: 'Link',
  };
  const colorSchema = useColorScheme();
  const titleColor =
    colorSchema === 'dark' ? styles.titleDark : styles.titleLight;

  return (
    <ModalBottom isVisible={isVisible} onClose={onChange} snapPoint={50}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ICheck style={styles.icon} />
          <Text style={[styles.title, titleColor]}>Solicitud enviada </Text>
          <Text style={styles.text}>
            Tu solicitud de pago ha sido enviada con éxito por{' '}
            {options[option] ?? ''}.
          </Text>
        </View>
      </View>
      <Button
        title="Entendido"
        styleBtn={{backgroundColor: colors.light.blue200, marginBottom: 40}}
        styleText={{color: colors.light.white}}
        onPress={onChange}
      />
    </ModalBottom>
  );
};

export default ModalShare;
