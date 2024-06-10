export interface Payment {
  amount: number;
  prefix: string;
  suffix: string;
}

export type State = {
  payment: Payment | null;
};

export type Action = {
  setPayment: (payment: Payment) => void;
};
