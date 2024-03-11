import { InputTypes } from '../../global/types/inputOptions.types.ts';
import { InputsObject } from '../../global/types/inputsObject.types.ts';
import { FormInputsSetter } from '../../global/types/formInputSetter.types.ts';

import {
  errorHasNoText,
  errorNoMatching,
  errorTooShort,
} from '../inputErrors/index.ts';

export default function checkInputErrors(
  formInputs: InputsObject,
  setFormInputs: FormInputsSetter
): boolean {
  let hasErrors;

  for (let formInput in formInputs) {
    const input = formInput as InputTypes;
    const inputObject = formInputs[input];

    if (inputObject) {
      switch (input) {
        case 'username':
          hasErrors =
            errorHasNoText(inputObject, setFormInputs) ||
            errorTooShort(inputObject, setFormInputs, 5);

          break;
        case 'firstName':
          hasErrors = errorHasNoText(inputObject, setFormInputs);

          break;
        case 'lastName':
          hasErrors = errorHasNoText(inputObject, setFormInputs);

          break;
        case 'password':
          hasErrors =
            errorHasNoText(inputObject, setFormInputs) ||
            errorTooShort(inputObject, setFormInputs, 8);

          break;
        case 'repeatPassword':
          if (formInputs.password && formInputs.repeatPassword) {
            hasErrors =
              errorHasNoText(
                inputObject,
                setFormInputs,
                'Password retype was not provided'
              ) ||
              errorNoMatching(
                inputObject,
                setFormInputs,
                [formInputs.password, formInputs.repeatPassword],
                'Passwords are not matching'
              );
          }

          break;
      }
    }
  }

  if (hasErrors) return true;
  return false;
}
