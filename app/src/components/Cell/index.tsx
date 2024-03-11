import { JSX } from 'react';
import { View } from 'react-native';

import styles from './styles.ts';

import { Props } from './types.ts';

const Cell = ({ children }: Props): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

export default Cell;
