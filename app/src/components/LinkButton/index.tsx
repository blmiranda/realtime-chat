import { JSX } from 'react';
import { Text } from 'react-native';

import { Props } from './types.ts';
import styles from './styles.ts';

const LinkButton = ({ text, onPress }: Props): JSX.Element => {
  return (
    <Text style={styles.text} onPress={onPress}>
      {text}
    </Text>
  );
};

export default LinkButton;
