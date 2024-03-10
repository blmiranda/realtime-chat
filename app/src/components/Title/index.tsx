import { JSX } from 'react';
import { Text } from 'react-native';

import styles from './styles.ts';
import { Props } from './types.ts';

const Title = ({ text, color }: Props): JSX.Element => {
  return <Text style={[styles.text, { color: color }]}>{text}</Text>;
};

export default Title;
