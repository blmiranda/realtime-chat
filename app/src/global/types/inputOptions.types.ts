import { TextInputProps } from 'react-native';

export type InputTypes =
  | 'username'
  | 'password'
  | 'firstName'
  | 'lastName'
  | 'repeatPassword';

export type InputOptions = {
  [key in InputTypes]: {
    id: InputTypes;
    title: string;
    value: string;
    error: string;
    inputSettings: Omit<TextInputProps, 'value' | 'onChangeText' | 'styles'>;
  };
};
