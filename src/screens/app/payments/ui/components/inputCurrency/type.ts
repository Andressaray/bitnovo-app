export interface Props {
  value: number;
  handleChangeValue: (text: number) => void;
  placeholder: string;
  suffix: string;
  prefix: string;
}
