import { JSX } from 'react';
import { View, Text } from 'react-native';

import styles from './styles.ts';

import { Props } from './types.ts';

import Thumbnail from '../../../../components/Thumbnail/index.tsx';
import SearchRowIndicator from '../SearchRowIndicator/index.tsx';
import Cell from '../../../../components/Cell/index.tsx';

const SearchRow = ({ user, searchList, setSearchList }: Props): JSX.Element => {
  return (
    <Cell>
      <Thumbnail url={user.thumbnail} size={76} />

      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>

      <SearchRowIndicator
        user={user}
        searchList={searchList}
        setSearchList={setSearchList}
      />
    </Cell>
  );
};

export default SearchRow;
