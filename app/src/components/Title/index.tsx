import { JSX } from 'react';
import { Text } from 'react-native';

import styles from './styles.ts';

interface props {
  text: string;
}

const Title = ({ text }: props): JSX.Element => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;
