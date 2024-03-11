import { SetRequestListState } from '../../../../global/types/setRequestListState.types';
import { SetSearchListState } from '../../../../global/types/setSearchListState.types';
import { RequestListObject } from '../../../home/types/requestListObject.types';
import { SearchListItem } from '../../types/searchListItem.types';

export interface FriendStatusMap {
  connected: {
    text: string;
    disabled: boolean;
    onPress: () => void;
  };
  'not-connected': {
    text: string;
    disabled: boolean;
    onPress: (
      socket: WebSocket | null,
      myUsername: string,
      username: string,
      searchList: Array<SearchListItem>,
      setSearchList: SetSearchListState,
      requestList: Array<RequestListObject> | null,
      setRequestList: SetRequestListState
    ) => void;
  };
  'pending-them': {
    text: string;
    disabled: boolean;
    onPress: (socket: WebSocket | null, username: string) => void;
  };
  'pending-me': {
    text: string;
    disabled: boolean;
    onPress: (socket: WebSocket | null, username: string) => void;
  };
}
