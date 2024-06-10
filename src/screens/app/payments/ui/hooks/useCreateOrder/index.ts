import {AxiosError} from 'axios';
import {useMutation} from 'react-query';
import useOrderStore from '@ui/store/order';
import {createOrder} from '../../services';
import {RequestOrder} from '../../types';
import toast from '@ui/utils/toast';

const useCreateOrder = () => {
  const {setOrder} = useOrderStore();
  const createOrderMutation = useMutation(
    (item: RequestOrder) => createOrder(item),
    {
      onSuccess: data => {
        setOrder(data.data);
      },
      onError: (error: AxiosError) => {
        toast({
          type: 'error',
          text1: 'Error',
          text2: error?.message,
        });
      },
    },
  );
  return {
    createOrderMutation,
  };
};

export default useCreateOrder;
