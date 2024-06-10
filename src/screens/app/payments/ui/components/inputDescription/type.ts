export interface Props {
  description: string;
  placeholder: string;
  setDescription: (text: string) => void;
  handleFocused: (focused: boolean) => void;
  isFocused: boolean;
}
