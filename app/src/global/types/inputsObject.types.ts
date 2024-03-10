import { InputTypes } from './inputOptions.types';
import { InputObject } from './inputObject.types';

export type InputsObject = {
  [key in InputTypes]?: InputObject;
};
