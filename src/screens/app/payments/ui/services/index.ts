import axiosInstance from '@ui/http/middlewate';
import {RequestOrder, ResponseOrder} from '../types';

const createOrder = async (order: RequestOrder): Promise<ResponseOrder> => {
  try {
    const response = await axiosInstance.post<ResponseOrder['data']>(
      '/orders/',
      {
        expected_output_amount: order.expected_output_amount,
        fiat: order.fiat,
        notes: order,
      },
    );
    return response;
  } catch (error) {
    throw new Error('Ha ocurrido un error al crear la orden.');
  }
};

export {createOrder};
