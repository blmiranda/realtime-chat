import { JSX } from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../../../global/styles/theme/index.ts';
import styles from './styles';

import { Props } from './types.ts';

const SearchBar = ({ value, setValue }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder="Search..."
          placeholderTextColor={theme.colors.base200}
        />

        <FontAwesomeIcon
          style={styles.icon}
          icon="magnifying-glass"
          size={20}
          color={theme.colors.base300}
        />
      </View>
    </View>
  );
};

export default SearchBar;
