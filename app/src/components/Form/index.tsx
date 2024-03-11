import { JSX, useState } from 'react';
import { View } from 'react-native';

import { InputTypes } from '../../global/types/inputOptions.types.ts';
import { Props } from './types.ts';
import inputOptions from '../../utils/inputOptions/index.ts';

import Input from '../Input/index.tsx';
import Button from '../Button/index.tsx';
import checkInputErrors from '../../utils/checkInputErrors/index.ts';
import generateInputsObject from '../../utils/generateInputsObject/index.ts';

const Form = ({
  inputs,
  buttonText,
  footer,
  onSubmit,
  loading,
}: Props): JSX.Element => {
  const [formInputs, setFormInputs] = useState(generateInputsObject(inputs));

  function submitForm(): void {
    const hasErrors = checkInputErrors(formInputs, setFormInputs);

    if (hasErrors) return;

    onSubmit(formInputs);
  }

  return (
    <View>
      {inputs.map((input: InputTypes, index: number): JSX.Element => {
        const inputObject = formInputs[input];

        if (!inputObject) {
          return <View key={index} />;
        }

        return (
          <Input
            key={index}
            inputOptions={inputOptions[input].inputSettings}
            {...inputOptions[input]}
            value={inputObject.value}
            onChangeText={(text) =>
              setFormInputs((prevState) => {
                inputObject.value = text;

                if (inputObject.error) {
                  inputObject.error = '';
                }

                return {
                  ...prevState,
                };
              })
            }
            error={inputObject.error}
          />
        );
      })}

      <Button title={buttonText} onPress={submitForm} loading={loading} />

      {footer && footer()}
    </View>
  );
};

export default Form;
