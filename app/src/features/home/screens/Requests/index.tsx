import { JSX } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import useSocket from '../../../../hooks/useSocket';
import Empty from '../../../../components/Empty';
import RequestRow from '../../components/RequestRow';

const Requests = (): JSX.Element => {
  const { requestList } = useSocket();

  console.log('ON THE REQESTS LIST:   ', requestList);

  return (
    <SafeAreaView style={styles.container}>
      {!requestList ? (
        <ActivityIndicator style={styles.loading} />
      ) : requestList.length === 0 ? (
        <Empty icon="bell" message="No requests" />
      ) : (
        <FlatList
          data={requestList}
          renderItem={({ item }) => <RequestRow item={item} />}
          keyExtractor={(item) => item.sender.username}
        />
      )}
    </SafeAreaView>
  );
};

export default Requests;
