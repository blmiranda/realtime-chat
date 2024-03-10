import { SetSearchListState } from '../../../../global/types/setSearchListState.types';
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
      setSearchList: SetSearchListState
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
