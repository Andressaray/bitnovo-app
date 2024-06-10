import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import useOrderStore from '@ui/store/order/index';
import toast from '@ui/utils/toast';
import {StackAppScreenRouteProp} from '../../../navigation/type';
import {Props} from './type';

const ContextOrder = ({children}: Props) => {
  const navigation = useNavigation<StackAppScreenRouteProp>();
  const {order} = useOrderStore();

  const handleNavigate = () => {
    navigation.navigate('payments');
  };
  useEffect(() => {
    if (order) {
      const ws = new WebSocket(
        `wss://payments.pre-bnvo.com/ws/merchant/${order?.identifier}`,
      );
      ws.addEventListener('message', event => {
        const data = JSON.parse(event.data);
        if (data.status === 'CA') {
          toast({
            type: 'error',
            text1: 'Error',
            text2: 'El pago ha sido cancelado',
          });
          handleNavigate();
        }
      });
      return () => {
        ws.close();
      };
    }
  }, [order]);
  return children;
};
export default ContextOrder;
