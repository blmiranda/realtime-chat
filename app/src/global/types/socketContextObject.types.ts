import { RequestListObject } from '../../features/home/types/requestListObject.types';

export interface SocketContextObject {
  socket: WebSocket | null;
  requestList: Array<RequestListObject> | null;
  socketConnect: () => void;
  socketClose: () => void;
}
