import { JSX, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import styles from './styles.ts';

import { SearchListItem } from '../../types/searchListItem.types.ts';

import useSocket from '../../../../hooks/useSocket/index.ts';

import SearchBar from '../../components/SearchBar';
import Empty from '../../../../components/Empty';
import SearchRow from '../../components/SearchRow/index.tsx';
import searchForFriends from '../../api/searchForFriends/index.ts';

const Search = (): JSX.Element => {
  const { socket } = useSocket();
  const [query, setQuery] = useState<string>('');
  const [searchList, setSearchList] = useState<Array<SearchListItem> | null>(
    null
  );

  useEffect(() => {
    searchForFriends(socket, setSearchList, query);
  }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={query} setValue={setQuery} />

      {searchList === null ? (
        <Empty
          icon="magnifying-glass"
          message="Search for friends"
          centered={false}
        />
      ) : searchList.length === 0 ? (
        <Empty
          icon="triangle-exclamation"
          message={`No users found for "${query}"`}
          centered={false}
        />
      ) : (
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
            <SearchRow
              user={item}
              searchList={searchList}
              setSearchList={setSearchList}
            />
          )}
          keyExtractor={(item) => item.username}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
