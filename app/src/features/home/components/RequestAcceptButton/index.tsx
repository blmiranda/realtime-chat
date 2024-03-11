import { JSX } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles.ts';

import { Props } from './types.ts';

import useSocket from '../../../../hooks/useSocket/index.ts';

const RequestAcceptButton = ({ item }: Props): JSX.Element => {
  const { socket } = useSocket();

  function handleRequestAccept() {
    socket?.send(
      JSON.stringify({
        source: 'request.accept',
        username: item.sender.username,
      })
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleRequestAccept}>
      <Text style={styles.text}>Accept</Text>
    </TouchableOpacity>
  );
};

export default RequestAcceptButton;
