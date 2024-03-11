import { UserObject } from '../../../global/types/userObject.types';

export interface SocketRequestListResponse {
  source: string;
  data: Array<RequestListObject>;
}

export interface RequestListObject {
  id: number;
  sender: UserObject;
  receiver: UserObject;
  created: string;
}
