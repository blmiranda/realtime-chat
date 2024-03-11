import { useContext } from 'react';

import { SocketContextObject } from '../../global/types/socketContextObject.types';

import SocketContext from '../../contexts/SocketContext';

function useSocket(): SocketContextObject {
  const context = useContext(SocketContext);

  return context;
}

export default useSocket;
