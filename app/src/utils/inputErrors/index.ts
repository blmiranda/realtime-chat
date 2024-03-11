import { InputObject } from '../../global/types/inputObject.types.ts';
import { FormInputsSetter } from '../../global/types/formInputSetter.types.ts';

export function errorHasNoText(
  inputObject: InputObject,
  setFormInputs: FormInputsSetter,
  customMessage?: string
): boolean {
  const hasNoText: boolean = !inputObject.value;

  if (hasNoText) {
    setFormInputs((prevState) => {
      inputObject.error =
        customMessage || `${inputObject.title} was not provided`;

      return {
        ...prevState,
        [inputObject.id]: {
          ...inputObject,
        },
      };
    });
    return true;
  }

  return false;
}

export function errorTooShort(
  inputObject: InputObject,
  setFormInputs: FormInputsSetter,
  minChar: number
): boolean {
  const isTooShort: boolean = inputObject.value.length < minChar;

  if (isTooShort) {
    setFormInputs((prevState) => {
      inputObject.error = `${inputObject.title} must be >= ${minChar} characters`;

      return {
        ...prevState,
        [inputObject.id]: {
          ...inputObject,
        },
      };
    });
    return true;
  }

  return false;
}

export function errorNoMatching(
  inputObject: InputObject,
  setFormInputs: FormInputsSetter,
  inputsToMatch: Array<InputObject>,
  customMessage?: string
): boolean {
  const inputsAreMatching: boolean =
    inputsToMatch[0].value !== inputsToMatch[1].value;

  if (inputsAreMatching) {
    setFormInputs((prevState) => {
      inputObject.error =
        customMessage || `${inputObject.title} inputs are not matching`;

      return {
        ...prevState,
        [inputObject.id]: {
          ...inputObject,
        },
      };
    });
    return true;
  }

  return false;
}
