export interface Currency {
  id: number;
  name: string;
  symbol: string;
  suffix: string;
  prefix: string;
  code: string;
  enabled: boolean;
  icon: string;
}
export type State = {
  currency: Currency;
};

export type Action = {
  setCurrency: (currency: Currency) => void;
};
