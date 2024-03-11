import { JSX } from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../global/styles/theme/index.ts';
import styles, { getContainerStyles } from './styles.ts';

import { Props } from './types.ts';

const Empty = ({ icon, message, centered = true }: Props): JSX.Element => {
  const containerStyles = getContainerStyles(centered);

  console.log('message onrequestsss: ', message);

  return (
    <View style={containerStyles}>
      <FontAwesomeIcon
        style={styles.icon}
        size={90}
        icon={icon}
        color={theme.colors.base150}
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default Empty;
