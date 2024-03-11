import { JSX } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles.ts';
import { Props } from './types.ts';

const Input = ({
  title,
  value,
  onChangeText,
  error,
  inputOptions,
}: Props): JSX.Element => {
  return (
    <View>
      <Text
        style={[styles.title, error ? styles.errorColor : styles.titleColor]}
      >
        {error || title}
      </Text>
      <TextInput
        {...inputOptions}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, error ? styles.inputError : null]}
      />
    </View>
  );
};

export default Input;
