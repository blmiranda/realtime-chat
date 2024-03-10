import { JSX } from 'react';
import { Text, View } from 'react-native';
import useSocket from '../../../../hooks/useSocket';

const Requests = (): JSX.Element => {
  const { requestList } = useSocket();

  console.log(requestList);

  return (
    <View>
      <Text>Requests</Text>
    </View>
  );
};

export default Requests;
