export interface CountryCode {
  code: string;
}

export type State = {
  code: string;
};

export type Action = {
  setCountryCode: (code: string) => void;
};
