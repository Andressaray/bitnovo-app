import {create} from 'zustand';
import {Action, State} from './type';

const useCountryCode = create<State & Action>(set => ({
  code: '+34',
  setCountryCode: (code: string) => set({code}),
}));

export default useCountryCode;
