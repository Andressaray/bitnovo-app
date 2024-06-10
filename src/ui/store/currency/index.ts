import {create} from 'zustand';
import {Action, State, Currency} from './type';

const useCurrencyStore = create<State & Action>(set => ({
  currency: {
    id: 1,
    name: 'Euro',
    symbol: '€',
    suffix: '€',
    prefix: '',
    code: 'EUR',
    enabled: true,
    icon: 'https://res.cloudinary.com/villavicencio/image/upload/f_auto,q_auto/v1/flags/eu',
  },
  setCurrency: (currency: Currency) => set({currency}),
}));

export default useCurrencyStore;
