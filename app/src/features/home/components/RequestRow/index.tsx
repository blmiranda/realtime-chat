import { JSX } from 'react';
import { View, Text } from 'react-native';

import styles from './styles.ts';

import { Props } from './types.ts';

import Cell from '../../../../components/Cell/index.tsx';
import Thumbnail from '../../../../components/Thumbnail/index.tsx';
import RequestAcceptButton from '../RequestAcceptButton/index.tsx';

const RequestRow = ({ item }: Props): JSX.Element => {
  const message: string = 'Requested to connect with you';
  const time: string = '7m ago';

  return (
    <Cell>
      <Thumbnail url={item.sender.thumbnail} size={76} />

      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.sender.name}</Text>
        <Text style={styles.username}>
          {message} <Text style={styles.time}>{time}</Text>
        </Text>
      </View>

      <RequestAcceptButton item={item} />
    </Cell>
  );
};

export default RequestRow;
