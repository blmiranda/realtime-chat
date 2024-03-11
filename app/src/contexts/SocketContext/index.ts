import { createContext } from 'react';

import { SocketContextObject } from '../../global/types/socketContextObject.types';

const SocketContext = createContext<SocketContextObject>({
  socket: null,
  requestList: null,
  setRequestList: () => {},
  socketConnect: () => {},
  socketClose: () => {},
});

export default SocketContext;
