export interface Props {
  code: string;
  isFocused: boolean;
  handleFocus: () => void;
  handleSend: (phone: string) => void;
  handleCode: () => void;
}
