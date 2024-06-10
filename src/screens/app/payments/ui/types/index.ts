import {Order} from '@ui/store/order/type';

export interface RequestOrder {
  expected_output_amount: number;
  fiat: string;
  notes: string;
}

export interface ResponseOrder {
  data: Order;
}
