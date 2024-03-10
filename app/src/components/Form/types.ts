import { JSX } from 'react';
import { InputTypes } from '../../global/types/inputOptions.types.ts';
import { InputsObject } from '../../global/types/inputsObject.types.ts';

export interface Props {
  inputs: Array<InputTypes>;
  buttonText: string;
  footer: () => JSX.Element;
  onSubmit: (formInputs: InputsObject) => void;
  loading: boolean;
}
