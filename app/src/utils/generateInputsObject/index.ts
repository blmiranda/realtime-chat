import { InputsObject } from '../../global/types/inputsObject.types';

import inputOptions from '../inputOptions';
import { InputTypes } from '../../global/types/inputOptions.types';

export default function generateInputsObject(
  inputs: Array<string>
): InputsObject {
  const options: InputsObject = {};

  inputs.forEach((input) => {
    options[input as InputTypes] = {
      ...inputOptions[input as InputTypes],
    };
  });

  return options;
}
