import { RequestListObject } from '../../features/home/types/requestListObject.types';
import { SetRequestListState } from './setRequestListState.types';

export interface SocketContextObject {
  socket: WebSocket | null;
  requestList: Array<RequestListObject> | null;
  setRequestList: SetRequestListState;
  socketConnect: () => void;
  socketClose: () => void;
}
