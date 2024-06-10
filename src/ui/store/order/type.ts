export interface Order {
  fiat: string;
  identifier: string;
  language: string;
  need_dni: boolean;
  reference: null | string;
  web_url: string;
}

export type State = {
  order: Order | null;
};

export type Action = {
  setOrder: (order: Order) => void;
};
