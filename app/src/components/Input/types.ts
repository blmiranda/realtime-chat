export interface Props {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  error: string;
  inputOptions: {
    [key: string]: any;
  };
}
