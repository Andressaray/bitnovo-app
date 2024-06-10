import React from 'react';

import {Text, View} from 'react-native';
import IInfo from '@icons/info-circle.svg';
import styles from './style';

const Badge = () => {
  return (
    <View style={styles.content}>
      <IInfo style={styles.icon} />
      <Text style={styles.text}>
        Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
      </Text>
    </View>
  );
};

export default Badge;
