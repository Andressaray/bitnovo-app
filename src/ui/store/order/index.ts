import {create} from 'zustand';
import {Action, State, Order} from './type';

const useOrderStore = create<State & Action>(set => ({
  order: null,
  setOrder: (order: Order) => set({order}),
}));

export default useOrderStore;
