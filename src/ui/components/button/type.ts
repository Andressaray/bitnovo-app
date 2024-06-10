import {TextStyle, ViewStyle} from 'react-native';

export interface Props {
  title: string;
  onPress: () => void;
  styleBtn?: ViewStyle;
  styleText?: TextStyle;
  isLoading?: boolean;
  IconRight?: React.FC | null;
}
