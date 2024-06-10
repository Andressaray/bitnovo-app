import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

interface RootAppStackParamList extends ParamListBase {
  countries: undefined;
  currency: undefined;
  payments: undefined;
  qr: undefined;
}

export type StackAppScreenRouteProp =
  NativeStackNavigationProp<RootAppStackParamList>;
