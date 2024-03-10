import { JSX, useState } from 'react';
import SocketContext from '../../contexts/SocketContext';

import { ADDRESS } from '../../services/defaultAxiosClient.ts';

import { Props } from './types.ts';
import { SocketContextObject } from '../../global/types/socketContextObject.types.ts';

import useAuth from '../../features/auth/hooks/useAuth/index.ts';
import {
  RequestListObject,
  SocketRequestListResponse,
} from '../../features/home/types/requestListObject.types.ts';

const SocketProvider = ({ children }: Props): JSX.Element => {
  const { userData } = useAuth();
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [requestList, setRequestList] =
    useState<Array<RequestListObject> | null>(null);

  function connectionHandler() {
    const token: string | undefined = userData?.tokens.access;

    const ws: WebSocket = new WebSocket(`ws://${ADDRESS}/chat/?token=${token}`);

    ws.onopen = () => {
      console.log('socket.onopen');

      ws.send(
        JSON.stringify({
          source: 'request.list',
        })
      );

      ws.onmessage = (event) => {
        const parsed: SocketRequestListResponse = JSON.parse(event.data);
        const data: Array<RequestListObject> = parsed.data;

        setRequestList(data);
      };
    };
    ws.onerror = (e) => {
      console.log('socket.onerror', e.message);
    };
    ws.onclose = () => {
      console.log('socket.onclose');
    };

    setSocket(ws);
  }

  function closingHandler() {
    setSocket(null);
  }

  const value: SocketContextObject = {
    socket: socket,
    requestList: requestList,
    socketConnect: connectionHandler,
    socketClose: closingHandler,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
