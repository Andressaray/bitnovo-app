import {create} from 'zustand';
import {Action, State, Payment} from './type';

const usePaymentStore = create<State & Action>(set => ({
  payment: null,
  setPayment: (payment: Payment) => set({payment}),
}));

export default usePaymentStore;
