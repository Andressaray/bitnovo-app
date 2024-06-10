import React from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useCurrencyStore from '@ui/store/currency';
import {useNavigation} from '@react-navigation/native';
import {colors} from '@theme';
import {BtnBack, BtnCurrencies, TitleHeader} from '@ui/components';
import {Countries, Currency, Payments, Qr, Share} from '../../../screens';
import {StackAppScreenRouteProp} from '../../../navigation/type';

const Stack = createNativeStackNavigator();

const PaymentsStack = () => {
  const {currency} = useCurrencyStore();
  const navigation = useNavigation<StackAppScreenRouteProp>();
  const colorSchema = useColorScheme();
  const backgroundColor =
    colorSchema === 'light' ? colors.light.white : colors.dark.blue;
  return (
    <Stack.Navigator
      initialRouteName="payments"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerStyle: {
          backgroundColor,
        },
      }}>
      <Stack.Screen
        name="payments"
        component={Payments}
        options={{
          headerShown: true,
          headerTitle: () => <TitleHeader title="Crear pago" />,
          headerRight: () => (
            <BtnCurrencies
              currency={currency.code}
              handlePress={() => navigation.navigate('currency')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="currency"
        options={{
          presentation: 'modal',
          headerTitle: () => <TitleHeader title="Selecciona una divisa" />,
          headerLeft: () => <BtnBack handleBack={() => navigation.goBack()} />,
        }}
        component={Currency}
      />
      <Stack.Screen
        name="share"
        component={Share}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="countries"
        options={{
          presentation: 'modal',
          headerTitle: () => <TitleHeader title="Seleccionar país" />,
          headerLeft: () => <BtnBack handleBack={() => navigation.goBack()} />,
        }}
        component={Countries}
      />
      <Stack.Screen
        name="qr"
        options={{
          presentation: 'modal',
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.light.white,
          },
          headerLeft: () => <BtnBack handleBack={() => navigation.goBack()} />,
        }}
        component={Qr}
      />
    </Stack.Navigator>
  );
};

export default PaymentsStack;
