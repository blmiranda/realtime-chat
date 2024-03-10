import requestConnection from '../../api/requestConnection';

import { FriendStatusMap } from './types';

const friendStatusMap: FriendStatusMap = {
  connected: {
    text: '',
    disabled: true,
    onPress: () => {},
  },
  'not-connected': {
    text: 'Connect',
    disabled: false,
    onPress: (socket, myUsername, username, searchList, setSearchList) =>
      requestConnection(
        socket,
        myUsername,
        username,
        searchList,
        setSearchList
      ),
  },
  'pending-them': {
    text: 'Pending',
    disabled: true,
    onPress: () => {},
  },
  'pending-me': {
    text: 'Accept',
    disabled: false,
    onPress: () => {},
  },
};

export default friendStatusMap;